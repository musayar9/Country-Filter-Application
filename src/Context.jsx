import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./data/queries";
import { getRandomColor } from "./components/Functions";
import Loading from "./components/Loading";
import PageNotFound from "./components/PageNotFound";

// used react context structure for state management
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState(""); // State for search term and filtering
  const [filter, setFilter] = useState([]); // The filtered data is kept
  const [selectCountries, setSelectCountries] = useState(""); // State for "currency" or "awsRegion" as grouping field
  const [randomColor, setRandomColor] = useState(null); // Color control
  const [group, setGroup] = useState([]); // Place where grouped records are kept
  const [groupSize, setGroupSize] = useState(""); //Number of groupings
  const [isGroup, setIsGroup] = useState(false); //Group  control
  const [count, setCount] = useState(0); // Group size control
  const [groupData, setGroupData] = useState(""); // Filter and group by "currency" or "awsRegion" status

  //Pulling and grouping data with useQuery
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    variables: {
      groupBy: groupData, // grouping by currencies or awsRegion
    },
  });

  //change the color of the background of the selected country
  const handleCountrySelect = (country) => {
    if (selectCountries === country?.code) {
      setSelectCountries(null);
      setRandomColor(null);
    } else {
      // If the country is not selected, add it to the list
      setSelectCountries(country?.code);
      setRandomColor(getRandomColor());
    }
  };

  //change the background color of the specified element when the page loads
  useEffect(() => {
    if (!loading) {
      let countries = data?.countries;
      let filterData = countries?.filter((country) => {
        const currency = Array.isArray(country?.currency)
          ? country.currency[0]
          : country.currency;

        if (currency) {
          const currencyLowerCase = currency.toLocaleLowerCase("TR");
          const searchLowerCase = search.toLocaleLowerCase("TR");
          return searchLowerCase === ""
            ? true
            : currencyLowerCase.includes(searchLowerCase);
        }

        return false; // If currency is null, it returns false
      });

      setFilter(filterData);

      if (filterData?.length >= 10 && search === "") {
        // If the filtered list is not empty, select the last element and set its color
        const country = countries[10];
        handleCountrySelect(country);
      } else if (search) {
        const lastCountry = filterData[filterData.length - 1];
        handleCountrySelect(lastCountry);
      }
    }
  }, [data, search, setFilter, loading]);

  //loading animation will be shown when the page first loads
  if (loading) {
    return <Loading />;
  }

  //If there is an error while fetching data, an error message will be shown.
  if (error) {
    return <PageNotFound message={error.message} />;
  }

  // Back to first list
  const handleReturnList = () => {
    setIsGroup(false);
    setCount(0);
    setSearch("");
    setGroupSize([]);
    setGroupData("");
  };

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        filter,
        setFilter,
        selectCountries,
        randomColor,
        handleCountrySelect,
        group,
        setGroup,
        groupSize,
        setGroupSize,
        isGroup,
        setIsGroup,
        count,
        setCount,
        handleReturnList,
        data,
        groupData,
        setGroupData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// created custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
