import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./data/queries";
import { getRandomColor } from "./components/Functions";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [selectCountries, setSelectCountries] = useState("");
  const [randomColor, setRandomColor] = useState(null);
  const [group, setGroup] = useState([])
  const [groupSize, setGroupSize] = useState([]);
  const [isGroup, setIsGroup] = useState(false);
  const [count, setCount] = useState(0);
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  console.log("data", data);

  const handleCountrySelect = (country) => {
    if (selectCountries === country?.code) {
      setSelectCountries(null);
      setRandomColor(null);
    } else {
      setSelectCountries(country?.code);
      setRandomColor(getRandomColor());
    }
  };

  useEffect(() => {
    if (!loading) {
      let countries = data.countries;
      let filterData = countries.filter((country) => {
        const currency = Array.isArray(country.currency)
          ? country.currency[0]
          : country.currency;

        if (currency) {
          const currencyLowerCase = currency.toLocaleLowerCase("TR");
          const searchLowerCase = search.toLocaleLowerCase("TR");
          return searchLowerCase === ""
            ? true
            : currencyLowerCase.includes(searchLowerCase);
        }

        return false;
      });

      setFilter(filterData);

      if (filterData.length >= 10 && search === "") {
        const country = countries[10];
        handleCountrySelect(country);
      } else if (search) {
        const lastCountry = filterData[filterData.length - 1];
        handleCountrySelect(lastCountry);
      }
    }
  }, [data, search, setFilter, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }


    const handleReturnList = () => {
      setIsGroup(false);
      setCount(0);
      setSearch("");
      setGroupSize([]);
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
        group, setGroup,
        groupSize,
        setGroupSize,
        isGroup,
        setIsGroup,
        count, setCount
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
