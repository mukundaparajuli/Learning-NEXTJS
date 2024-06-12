"use client";
import { useEffect } from "react";

export default function error({ error }: { error: Error }) {
  useEffect(() => {
    console.log(`${error}`);
  }, [error]);
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div>
          <div className="font-md text-red-500">
            Error occured while fetching the data!
          </div>
        </div>
      </div>
    </>
  );
}
