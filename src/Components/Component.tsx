import React from "react";
import { useJsonFetch } from "./useJsonFetch";
type ComponentProp = {
  endpoint: string;
};
const Component: React.FC<ComponentProp> = ({ endpoint }) => {
  const [data, loading, error] = useJsonFetch(
    `http://localhost:7070/${endpoint}`,
    {
      method: "GET",
    }
  );
  console.log(error);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("data", data);
  return <div>Data: {JSON.stringify(data)}</div>;
};

export default Component;
