import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // Initialize a response that allows the request to continue.
  const response = NextResponse.next();

  // Retrieve the current theme from cookies, if available.
  const currentTheme = req.cookies.get("theme");

  // If the "theme" cookie is not set, set it to "dark" by default.
  if (!currentTheme) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  // Example of a rewrite if the request path is "/profile".
  // if (req.nextUrl.pathname === "/profile") {
  //   return NextResponse.rewrite(new URL("/hello", req.url));
  // }

  // if (req.nextUrl.pathname === "/profile") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  return response;
}

export const config = {
  matcher: "/profile",
};
