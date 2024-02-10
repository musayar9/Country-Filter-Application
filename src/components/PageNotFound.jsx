import pageNotFound from "../assets/pageNotFound.svg";
const PageNotFound = ({ message }) => {
  //If there is an error while fetching data, an error message will be shown.

  return (
    <div className="max-w-2xl flex items-center justify-center  flex-col min-h-screen mx-auto">
      <div>
        <img src={pageNotFound} alt="pageNotFound" />
      </div>
      <p className="text-center mt-5 text-red-800 text-3xl">{message}</p>
    </div>
  );
};

export default PageNotFound;
