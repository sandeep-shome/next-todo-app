import dbcon from "@/lib/dbcon";
import todoModel from "@/models/todo";
import { NextResponse } from "next/server";

dbcon();
export async function POST(request) {
  try {
    const { text, isDone } = await request.json();
    const newTodo = new todoModel({
      text: text,
      isDone: isDone,
    });
    const todo = await newTodo.save();
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json({ error: error.messege }, { status: 400 });
  }
}
