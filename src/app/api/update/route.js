import dbcon from "@/lib/dbcon";
import todoModel from "@/models/todo";
import { NextResponse } from "next/server";

dbcon();
export async function PUT(req) {
  try {
    const id = await req.nextUrl.searchParams.get("id");
    const { isDone } = await req.json();
    await todoModel.findByIdAndUpdate(id, { isDone: isDone });
    return NextResponse.json({ message: "OK" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
