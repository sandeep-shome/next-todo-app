import dbcon from "@/lib/dbcon";
import todoModel from "@/models/todo";
import { NextResponse } from "next/server";

dbcon();
export async function DELETE(req) {
  try {
    const id = await req.nextUrl.searchParams.get("id");
    await todoModel.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "succesfully deleted" },
      { status: 200 }
    );
    /* return NextResponse.json({ id: id }); */
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
