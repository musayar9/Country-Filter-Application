import { FiArrowLeft } from "react-icons/fi";
import { useGlobalContext } from "../Context";
import GroupCountriesList from "./GroupCountriesList";
import TopButton from "./TopButton";

const GroupCountries = () => {
    
      // Filter and group by "currency" or "awsRegion" status 
    

  const { groupData, data, handleReturnList } = useGlobalContext();

  

  const groupValue = {};
  let countryData = data.countries;

  countryData.forEach((country) => {
    let groupKey = country[groupData];

    if (Array.isArray(groupKey)) {
      groupKey = groupKey[0];
    }

    if (!groupKey) {
      return;
    }

    if (!groupValue[groupKey]) {
      groupValue[groupKey] = [];
    }

    groupValue[groupKey].push(country);
  });



  return (
    <>
      {groupData === "currency" || groupData === "awsRegion" ? (
        <div className="flex flex-col items-center justify-center mx-auto">
          {/*Listing awsRegion or currency values */}
          {Object.entries(groupValue).map(([group, countryList]) => (
            <GroupCountriesList
              key={group}
              group={group}
              countryList={countryList}
              groupData={groupData}
            />
          ))}

          <TopButton />
          
          
          {/*Return list button */}

          <button
            className={`border border-emerald-200 px-5 py-2 rounded-xl flex items-center justify-between space-x-3 
        hover:bg-emerald-700 hover:text-gray-50 duration-700 hover:border-emerald-700   active:-translate-x-4`}
            style={{
              bottom: "20px",
              left: "40px",
              position: "fixed",
            }}
            onClick={handleReturnList}
          >
            <FiArrowLeft />{" "}
            <span className="font-semibold text-md">Return List</span>
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default GroupCountries;
