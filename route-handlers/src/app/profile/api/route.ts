import { type NextRequest } from "next/server";
import { headers } from "next/headers";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const requestHeadersList = headers();
  const theme = request.cookies.get("theme");
  const cookiesValue = cookies();
  cookies().set("token", "12345");

  console.log(" ");
  console.log(" ");
  console.log(cookiesValue.get("token"));
  console.log(theme);
  console.log(requestHeadersList.get("Authorization"));
  console.log(requestHeaders.get("Authorization"));
  console.log(" ");
  console.log(" ");

  return new Response("<h1>Profile API Page</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
