import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";
export type { NextResponse } from "next/server";

export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, [
  "/administration/insight",
  "/administration/dataPage",
  "/administration/apotek",
]);
