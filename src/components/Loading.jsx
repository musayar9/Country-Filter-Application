import { ColorRing } from "react-loader-spinner";
const Loading = () => {
// loading animation

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="color-ring-loading"
        wrapperClass="color-ring-wrapper"
        colors={["#34d399", "#10b981", "#059669", "#047857", "#064e3b"]}
      />
    </div>
  );
};

export default Loading;
