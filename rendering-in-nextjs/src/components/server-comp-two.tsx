import fs from "fs";

export default function ServerComponentTwo() {
  fs.readFileSync("src/components/server-comp-two.tsx", "utf-8");
  return <h1>Server Component Two</h1>;
}
