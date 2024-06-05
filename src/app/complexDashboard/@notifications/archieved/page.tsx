import Card from "@/components/Card";
import Link from "next/link";

export default function ArchievedNotifications() {
  return (
    <Card>
      <div>Archieved Notifications</div>
      <Link href="/complexDashboard/">Default</Link>
    </Card>
  );
}
