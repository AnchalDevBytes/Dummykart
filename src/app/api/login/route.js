import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";

connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    //check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    console.log("user exists");

    const validatePassword = await bcryptjs.compare(password, user.password);
    if (!validatePassword) {
      return NextResponse.json(
        { error: "Password is incorrect" },
        { status: 400 }
      );
    }
    console.log(user);

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    //create token

    const token = await Jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
        message: "Login successfully",
        success: true,
        userData : user
      });

    response.cookies.set("token", token, {
        httpOnly: true,
    });
  

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
