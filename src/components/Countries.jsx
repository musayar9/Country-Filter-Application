import { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";
import CountryFilterList from "./CountryFilterList";
import FormArea from "./FormArea";
import GroupArea from "./GroupArea";
import { ColorRing } from "react-loader-spinner";
import Error from "./Error";
const Countries = () => {
  const { filter, isGroup } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  

   useEffect(() => {
     const timer = setTimeout(() => {
       setIsLoading(false);
     }, 200);

     return () => clearTimeout(timer);
   }, []);

  useEffect(() => {
    if (filter.length === 0 && !isLoading) {
      setError(true);
    } else {
      setError(false);
    }
  }, [filter, isLoading]);

  return (
    <div className="max-w-7xl mx-auto  p-4">
      <h1>Country Filter Application</h1>
      <div className="max-w-xl mx-auto border border-slate-300 mt-10 p-8">
        <FormArea />
      </div>

      {isGroup && (
        <div className="max-w-5xl overflow-x-auto mx-auto p-4 ">
          <GroupArea />
        </div>
      )}

      {!isGroup && (
        <>
          {error ? (
            <Error />
          ) : isLoading ? (
            <div className="flex items-center justify-center mt-5">
              <ColorRing
                visible={true}
                height="150"
                width="150"
                ariaLabel="color-ring-loading"
                wrapperClass="color-ring-wrapper"
                colors={["#34d399", "#10b981", "#059669", "#047857", "#064e3b"]}
              />
            </div>
          ) : (
            <div className="max-w-5xl overflow-x-auto mx-auto p-4 rounded-md border border-slate-300 my-7 shadow-xl">
              <CountryFilterList />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Countries;
