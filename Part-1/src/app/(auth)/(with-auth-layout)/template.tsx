"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";
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
  const [state, setState] = useState("");

  return (
    <>
      <nav>
        <div>
          <input
            type="text"
            name="text"
            id="text"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        {links.map(({ name, link }) => {
          const isActive = pathname.startsWith(link);
          return (
            <Link
              href={link}
              key={name}
              className={isActive ? "font-bold mr-4" : "text-blue-700 mr-4"}
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
