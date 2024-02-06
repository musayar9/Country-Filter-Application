import { useGlobalContext } from "../Context";
import { filterGroupSize } from "./Functions";

const FormArea = () => {
  const {
    filter,
    search,
    setSearch,
    groupSize,
    setGroupSize,
    setIsGroup,
    setGroup,
    setCount

  } = useGlobalContext();

  const handleGroupSize = (e) => {
    const groupSizeValue = Number(e.target.value);
    if (!isNaN(groupSizeValue)) {
      setGroupSize(groupSizeValue);
    }
  };

  const handleSubmitGroupSize = (e) => {
    e.preventDefault();
    if (groupSize) {
      const groups = filterGroupSize(filter, groupSize);
      setGroup(groups);
      setIsGroup(true);
      setCount(0)
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="relative z-20  mb-6 group">
        <input
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          type="text"
          name="currency"
          id="currency"
          placeholder=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
        <label
          htmlFor="currency"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Currency Value
        </label>
      </div>

      <form
        className="flex items-center justify-center space-x-2"
        onSubmit={handleSubmitGroupSize}
      >
        <div className="relative z-20  mb-6 group">
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            name="groupSize"
            id="groupSize"
            placeholder=" "
            value={groupSize}
            onChange={handleGroupSize}
          />
          <label
            htmlFor="groupSize"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Group Size
          </label>
        </div>
        <button
          type="submit"
          disabled={groupSize === "" && groupSize === 0}
          className="text-blue-700 hover:text-white border border-blue-400  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center mr-2 mb-3  disabled:bg-blue-400 disabled:text-gray-50"
        >
          Show Group
        </button>
      </form>
    </div>
  );
};

export default FormArea;
