"use client";

import { useState } from "react";
import ClientComponentTwo from "./client-comp-two";
import ServerComponentOne from "./server-comp-one";

export default function ClientComponentOne({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setState] = useState("Batman");
  return (
    <>
      <h1>Client Component One</h1>
      {children}
    </>
  );
}
