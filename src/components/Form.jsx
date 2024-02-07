import FormArea from "./FormArea";
import worldImage from "../assets/world.svg";
const Form = () => {
  return (
    <div className="border-b-2 border-slate-300  bg-emerald-500">
      <div className=" flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center md:justify-center gap-4">
        {/*Left Side */}
        <div className="flex-1 p-5">
          <img className="drop-shadow-lg " src={worldImage} />
          <p className="text-sm mt-5 text-white">
            This is a demo project. You can sign ın with your email and password
            or with google
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
