import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/database";
import { Task } from "@/models/task";
import { User } from "@/models/user";

export const GET = async () => {
  try {
    const session = await getServerSession();
    await connectDB();
    const user = await User.findOne({ email: session?.user?.email }).exec();
    const tasksIds = user.tasks;
    const tasks = await Task.find({ _id: { $in: tasksIds } }).exec();
    return NextResponse.json({ tasks });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
