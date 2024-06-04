"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
const links = [
  { name: "Register", link: "/register" },
  { name: "Login", link: "/login" },
  { name: "Forgot Password", link: "/forgotPassword" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <nav>
        {links.map(({ name, link }) => {
          const isActive = pathname.startsWith(link);
          return (
            <Link
              href={link}
              key={name}
              className={isActive ? "font-bold mr-4" : "text-blue mr-4"}
            >
              {name}
            </Link>
          );
        })}
      </nav>
      <div>{children}</div>
    </>
  );
}
