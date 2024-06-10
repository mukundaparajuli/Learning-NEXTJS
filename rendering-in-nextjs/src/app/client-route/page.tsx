"use client";

import { serverSideFunction } from "../utils/server-utils";

export default function ClientSideRouting() {
  const result = serverSideFunction();
  return (
    <>
      {console.log("Client side rendered")}
      <h1>Client side routing</h1>
      <p>{result}</p>
    </>
  );
}
