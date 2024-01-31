import { useRouteError } from "react-router-dom";

const NotFound = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const err: any = useRouteError();

  return (
    <>
      <h1 className="text-3xl font-bold">This Page Doesn't Exist!</h1>
      <div>
        <p>{err.statusText || err.message}</p>
      </div>
    </>
  );
};

export default NotFound;
