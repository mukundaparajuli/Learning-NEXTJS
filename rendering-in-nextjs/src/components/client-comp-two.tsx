"use client";

import { useState } from "react";

export default function ClientComponentTwo() {
  const [name, setState] = useState("Batman");
  return <h1>Client Component Two</h1>;
}
