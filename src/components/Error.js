import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();  
  return (
    <div className="error">
      <h1>Oops!!</h1>
      <p>Somthing went wrong!!</p>
      <p>{err.data}</p>
      <p>{err.status}: {err.statusText}</p>
    </div>
  );
}

export default Error;