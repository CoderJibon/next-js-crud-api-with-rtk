import dataBaseConfig from "@/config/db.js";
import User from "@/models/User.js";
import { NextResponse } from "next/server.js";

//get all users from
export async function GET() {
  try {
    await dataBaseConfig();
    const user = await User.find();
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

// create a new user
export async function POST(request) {
  try {
    await dataBaseConfig();
    const data = await request.json();
    const user = await User.create(data);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

//delete a user
export async function DELETE(request) {
  try {
    await dataBaseConfig();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const userId = await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "Delete Success" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
