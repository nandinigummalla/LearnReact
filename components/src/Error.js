import { useRouteError } from "react-router-dom";

const Error = () => {
  // provides useRouteError hook for the errors
  const err = useRouteError();
  return (
    <div className="error">
      <h1>
        {err?.status}:{err?.statusText} : {err?.error?.message}
      </h1>
      <img
        src="https://4kwallpapers.com/images/walls/thumbs_3t/18164.jpg"
        style={{ height: "500px ", width: "100%" }}
      />
    </div>
  );
};

export default Error;
