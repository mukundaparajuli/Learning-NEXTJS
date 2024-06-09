export default function About() {
  console.log("about section");
  return (
    <>
      <h1>About Section</h1>
      <h2>Time:{new Date().toLocaleTimeString()}</h2>
    </>
  );
}
