// app/api/tasks/add/route.ts

import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Task from "../../../../models/Task";

export async function POST(req: NextRequest) {
  await dbConnect();

  const { username, text } = await req.json();  // Parse JSON body

  if (!username || !text) {
    return NextResponse.json(
      { message: "Username and task text are required." },
      { status: 400 }
    );
  }

  try {
    const task = await Task.create({ username, text, completed: false });
    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding task", error },
      { status: 500 }
    );
  }
}
