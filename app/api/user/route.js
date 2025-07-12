import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '@/models/user';
import connectDB from '@/lib/db';

// GET: Fetch all users
export async function GET(request) {
  await connectDB();
  const users = await User.find({});
  return NextResponse.json({
    message: "Users found successfully",
    users: users,
  }, {
    status: 200,
  });
}

// POST: Create a new user
export async function POST(request) {
  await connectDB();

  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, password } = body;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create a new user document
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      user: savedUser,
    }, {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Future implementation
export async function DELETE(request) {
  return NextResponse.json({ message: "DELETE not implemented yet" }, { status: 501 });
}

// PATCH: Future implementation
export async function PATCH(request) {
  return NextResponse.json({ message: "PATCH not implemented yet" }, { status: 501 });
}