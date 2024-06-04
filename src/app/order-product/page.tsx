"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Handling the click!");
    router.push("/");
    // router.replace()  =>history
    // router.back()    =>navigate back to last page
    // router.forward() =>navigate forward
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
