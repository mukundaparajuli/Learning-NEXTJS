import ImageSlider from "@/components/imageSlider";
import { serverSideFunction } from "../utils/server-utils";

export default function ClientSideRouting() {
  const result = serverSideFunction();
  return (
    <>
      {console.log("Server route rendered")}
      <h1>Server side routing</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
}
