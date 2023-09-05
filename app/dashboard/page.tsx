import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>App Router</h1>
      <hr />
      <Link href="/dashboard/notifications">View notifications</Link>
    </div>
  );
}
