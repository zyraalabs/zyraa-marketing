import { type NextRequest, NextResponse } from "next/server";
import { AUTH_URL } from "@/lib/env";

export async function GET(_request: NextRequest) {
  return NextResponse.redirect(`${AUTH_URL}/api/auth/logout`);
}
