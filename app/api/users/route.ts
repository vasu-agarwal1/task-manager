import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/User";
import { getToken } from "next-auth/jwt";

export async function GET(req: any) {
  await dbConnect();
  const token = await getToken({ req });
  
  if (!token || token.role !== "Admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Admins only need a list of Members to assign tasks
  const users = await User.find({ role: "Member" }).select("name email _id");
  return NextResponse.json(users);
}