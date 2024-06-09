"use client";
import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  return (
    <>
      <h1>Dashboard Page</h1>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {console.log("Dashboard client component")}
      <h2>Hello {name}!</h2>
    </>
  );
}
