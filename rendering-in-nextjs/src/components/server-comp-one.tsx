import fs from "fs";
import ServerComponentTwo from "./server-comp-two";
import ClientComponentOne from "./client-comp-one";

export default function ServerComponentOne() {
  fs.readFileSync("src/components/server-comp-one.tsx", "utf-8");
  return (
    <>
      <h1>Server Component One</h1>
    </>
  );
}
