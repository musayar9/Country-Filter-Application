import { useGlobalContext } from "../Context";

const GroupCountriesList = ({ group, countryList }) => {
  const { groupData } = useGlobalContext();
  return (
    <div className="max-w-5xl">
      <div className="border p-4 rounded shadow-md  mt-10 bg-emerald-400 w-[900px]">
        <h2 className="text-lg font-semibold mb-2 text-white">
          {groupData} : {group}
        </h2>
        <ul className="grid grid-cols-4 gap-2">
          {countryList.map((country) => (
            <li
              key={country.code}
              className="bg-blue-100 p-2 rounded text-emerald-900 drop-shadow-xl"
            >
              {country.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroupCountriesList;
