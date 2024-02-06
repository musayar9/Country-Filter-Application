
import { useEffect } from "react";
import { useGlobalContext } from "../Context";
const GroupArea = () => {


 const {
   group,
   selectCountries,
   randomColor,
   handleCountrySelect,
   search,
   setFilter,
   filter,
   count,
   setCount
   

 } = useGlobalContext();
   
    useEffect(()=>{
      let filteredCountries = group[count].filter((group) => {
        const currency = Array.isArray(group.currency)
          ? group.currency[0]
          : group.currency;

        if (currency) {
          const currencyLowerCase = currency.toLocaleLowerCase("TR");
          const searchLowerCase = search.toLocaleLowerCase("TR");
          return searchLowerCase === ""
            ? true
            : currencyLowerCase.includes(searchLowerCase);
        }
        return false;
      });
      setFilter(filteredCountries);
      if (search === "" && filteredCountries.length >= 10) {
        const value = group[9];
        handleCountrySelect(value);
      } else if (search) {
        const lastCountry = filteredCountries[filteredCountries.length - 1];
        handleCountrySelect(lastCountry);
      }
        
    }, [count, search, group])
    

  return (
    <>
      <div className="rounded-md border border-slate-300 my-7 p-4 shadow-xl">
        <table className="text-sm w-full  text-left text-gray-500 p-5 ">
          <thead className="text-sm text-gray-100 capitalize bg-emerald-400 rounded-md">
            <tr className="">
              <th scope="col" className="px-3 py-4">
                Code
              </th>
              <th scope="col" className="px-3 py-4">
                Country
              </th>
              <th scope="col" className="px-3 py-4">
                Capital
              </th>
              <th scope="col" className="px-3 py-4">
                Native
              </th>
              <th scope="col" className="px-3 py-4">
                Currency
              </th>
              <th scope="col" className="px-3 py-4">
                Languages
              </th>
              <th scope="col" className="px-3 py-4">
                Phone
              </th>
            </tr>
          </thead>

          <tbody>
            {filter?.map((country) => (
              <tr
                className="transition-all duration-300"
                key={country.code}
                style={{
                  backgroundColor:
                    selectCountries === country?.code
                      ? randomColor // Background color of the selected country
                      : "white",
                  color:
                    selectCountries === country?.code && randomColor // Text color of the selected country
                      ? "white"
                      : "black",
                  cursor: "pointer",
                }}
                onClick={() => handleCountrySelect(country)}
              >
                <td className="px-4  py-2 font-medium  whitespace-nowrap">
                  {country.code}
                </td>
                <td className="px-4  py-2 " style={{}}>
                  {country.name}
                </td>
                <td className="px-4  py-2 ">{country.capital}</td>
                <td className="px-4  py-2  ">{country.native}</td>
                <td className="px-4  py-2 ">{country.currency}</td>
                <td className="px-4  py-2   uppercase">
                  {country.languages[0]?.code}
                </td>
                <td className="px-4  py-2  ">(+{country.phone})</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mb-5">
            <button className="flex items-center justify-center w-8 h-8 px-2 py-2 
            rounded-full hover:bg-red-700"
            disabled={count <= 0}
            onClick={()=>setCount(count + 1)}
            >
            
            </button>
      
      </div>
    </>
  );
}

export default GroupArea