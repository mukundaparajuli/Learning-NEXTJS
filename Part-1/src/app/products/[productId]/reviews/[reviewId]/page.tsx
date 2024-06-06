"use client";
import { notFound } from "next/navigation";

function getRandomNumber(count: number): number {
  const number = Math.floor(Math.random() * count);
  return number;
}
export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  // const random = getRandomNumber(2);
  // if (random == 1) {
  //   throw new Error("Error loading review");
  // }
  return (
    <h1>
      Review {params.reviewId} for the product {params.productId}
    </h1>
  );
}
