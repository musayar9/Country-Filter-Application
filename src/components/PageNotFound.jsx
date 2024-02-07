import pageNotFound from "../assets/pageNotFound.svg"
const PageNotFound = ({ message }) => {
  return (
    <div className="max-w-2xl mx-auto my-10">
      <div>
        <img src={pageNotFound} alt="pageNotFound" />
      </div>
        <p className="text-center mt-5 text-red-800 text-3xl">{message}</p>
    </div>
  );
};

export default PageNotFound;
