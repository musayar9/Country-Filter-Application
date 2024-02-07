import { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";
import CountryFilterList from "./CountryFilterList";
// import FormArea from "./FormArea";
import GroupArea from "./GroupArea";
import { ColorRing } from "react-loader-spinner";
import Error from "./Error";
import GroupCountries from "./GroupCountries";
import Form from "./Form";
const Countries = () => {
  const { filter, isGroup, groupData } = useGlobalContext();
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
    <div className=" mx-auto  ">
      <Form />

      <h2 className="drop-shadow-xl text-center text-3xl text-emerald-600 font-bold mt-8">
        Country Filter Application
      </h2>

      {isGroup && (
        <div className="max-w-5xl overflow-x-auto mx-auto p-4 ">
          <GroupArea />
        </div>
      )}

      <div className={isGroup ? `hidden` : `flex`}>
        <GroupCountries />
      </div>

      {!groupData && !isGroup && (
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
            <div className="max-w-5xl  overflow-x-auto mx-auto p-4 rounded-md border border-emerald-300 my-7 shadow-xl">
              <CountryFilterList />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Countries;
