import notData from "../assets/notData.svg";
import { BiSolidErrorCircle } from "react-icons/bi";
const Error = () => {
  return (
    <div className="flex items-center flex-col  justify-center mt-5">
      <img src={notData} className=" w-56" />

      <p className="text-xl font-bold text-red-700 flex flex-1 items-center space-x-2 border border-red-800 shadow-lg rounded-md p-5 
      w-72 mt-4">
        <BiSolidErrorCircle size={24} />
        <span>Data Not Found</span>
      </p>
    </div>
  );
};

export default Error;
