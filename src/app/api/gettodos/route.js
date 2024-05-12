import dbcon from "@/lib/dbcon";
import todoModel from "@/models/todo";
import { NextResponse } from "next/server";

dbcon();
export async function GET(req) {
  try {
    const todos = await todoModel.find();
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
