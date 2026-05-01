import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Task from "@/lib/models/Task";
import { getToken } from "next-auth/jwt";

export async function GET(req: any) {
  await dbConnect();
  const token = await getToken({ req });
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const filter = token.role === "Admin" ? {} : { assignedTo: token.id };
  
  // Added .populate() to get the assigned user's name
  const tasks = await Task.find(filter)
    .populate("assignedTo", "name")
    .sort({ createdAt: -1 });
  
  return NextResponse.json(tasks);
}

export async function POST(req: any) {
  await dbConnect();
  const token = await getToken({ req });
  
  if (!token || token.role !== "Admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const task = await Task.create({
    ...body,
    project: body.project || "000000000000000000000000", 
  });
  
  return NextResponse.json(task);
}