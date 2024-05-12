import { NextResponse } from "next/server";
export async function GET(req) {
  try {
    return NextResponse.json({ data: "hello world" });
  } catch (error) {
    return NextResponse.json({ error: error.messege });
  }
}
