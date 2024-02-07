import FormArea from "./FormArea";
import worldImage from "../assets/world.svg";
const Form = () => {
  return (
    <div className="border-b-2 border-slate-300  bg-emerald-500">
      <div className=" flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center md:justify-center gap-4">
        {/*Left Side */}
        <div className="flex-1 p-5">
          <img className="drop-shadow-lg  " src={worldImage} />
          <p className="text-xs mt-5 ml-4 text-white flex items-start justify-center flex-col space-y-2 tracking-tight">
            <span>Filtering by entered dollar exchange rate</span>
            <span>
              Grouping data filtered by dollar exchange rate according to the
              entered number value
            </span>

            <span>Filtering by country group value</span>
          </p>
        </div>

        {/**Rİgth Side */}
        <div className=" flex-1 bg-slate-50 rounded-md shadow-lg">
          <FormArea />
        </div>
      </div>
    </div>
  );
};

export default Form;
