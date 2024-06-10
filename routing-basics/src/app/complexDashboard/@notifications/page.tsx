import Card from "../../../components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complexDashboard/archieved">Archieved</Link>
    </Card>
  );
}
