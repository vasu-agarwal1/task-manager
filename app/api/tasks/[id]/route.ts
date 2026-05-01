import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Task from "@/lib/models/Task";
import { getToken } from "next-auth/jwt";

// We update the type signature to expect a Promise for params
export async function PATCH(
  req: any, 
  context: { params: Promise<{ id: string }> }
) {
  await dbConnect();
  const token = await getToken({ req });
  
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { status } = body;
    
    // We await the params object before destructuring the ID
    const { id } = await context.params; 

    // Update the task status and return the new document
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}