import { useGlobalContext } from "../Context";
import { FiArrowUp } from "react-icons/fi";
import { backToTop } from "./Functions";
const CountryFilterList = () => {
  const { filter, selectCountries, randomColor, handleCountrySelect } =
    useGlobalContext();

  return (
    <>
      <table className="text-sm w-full  text-left text-gray-500 p-5 ">
        <thead className="text-sm text-gray-100 capitalize bg-emerald-400 border ">
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
              Languages
            </th>
            <th scope="col" className="px-3 py-4">
              Currency
            </th>

            <th scope="col" className="px-3 py-4">
              Phone
            </th>
          </tr>
        </thead>

        <tbody>
          {filter.map((country) => (
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
              <td className="px-4  py-2 font-medium  whitespace-nowrap text-emerald-400">
                {country.code}
              </td>
              <td className="px-4  py-2 ">{country.name}</td>
              <td className="px-4  py-2 ">{country.capital}</td>
              <td className="px-4  py-2  ">{country.native}</td>
              <td className="px-4  py-2   capitalize">
                {country.languages[0]?.name}
              </td>
              <td className="px-4  py-2 ">{country.currency}</td>

              <td className="px-4  py-2  ">(+{country.phone})</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className={`border border-emerald-200 px-5 py-2 rounded-xl flex items-center justify-between space-x-3 
        hover:bg-emerald-400 hover:text-emerald-50 duration-700 hover:border-emerald-300  active:translate-y-7`}
        onClick={backToTop}
        style={{ bottom: "20px", right: "40px", position: "fixed" }}
      >
        <FiArrowUp /> <span className="font-semibold text-md">Back To Top</span>
      </button>
    </>
  );
};

export default CountryFilterList;
