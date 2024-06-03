export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Auth Layout</h2>
    </>
  );
}
