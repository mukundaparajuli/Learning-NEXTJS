import ClientComponentOne from "@/components/client-comp-one";
import ServerComponentOne from "@/components/server-comp-one";

export default function InterLeaving() {
  return (
    <>
      <h1>Interleaving</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
