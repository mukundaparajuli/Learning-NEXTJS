"use client";
import { useState } from "react";

export default function NavSearch() {
  console.log("nav search rendered");
  const [search, setSearch] = useState("");
  return <h1>Nav Search</h1>;
}
