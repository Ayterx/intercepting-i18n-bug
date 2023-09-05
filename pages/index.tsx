import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const { locale } = useRouter();

  return (
    <div>
      <h1>Pages Router</h1>
      <hr />
      <Link locale="en" href="/dashboard">
        {locale === "ar" ? "الذهاب إلى لوحة القيادة" : "Go to dashboard"}
      </Link>
    </div>
  );
}
