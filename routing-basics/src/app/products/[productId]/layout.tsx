"use client";
export default function productDetails({
  children,
}: {
  children: React.ReactNode;
}) {
  function getRandomNumber(count: number): number {
    const number = Math.floor(Math.random() * count);
    return number;
  }
  const random = getRandomNumber(2);
  if (random === 1) {
    throw new Error("Error loading Product");
  }
  return (
    <>
      {children}
      <h1>Featured Products</h1>
    </>
  );
}
