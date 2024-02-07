
import { backToTop } from './Functions';
import { FiArrowUp } from 'react-icons/fi';
const TopButton = () => {
  return (
    <button
      className={`border border-emerald-200 px-5 py-2 rounded-xl flex items-center justify-between space-x-3 
        hover:bg-emerald-400 hover:text-emerald-50 duration-700 hover:border-emerald-300  active:translate-y-7`}
      onClick={backToTop}
      style={{ bottom: "20px", right: "40px", position: "fixed" }}
    >
      <FiArrowUp /> <span className="font-semibold text-md">Back To Top</span>
    </button>
  );
}

export default TopButton
