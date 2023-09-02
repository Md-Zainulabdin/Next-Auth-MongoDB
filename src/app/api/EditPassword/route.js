import connectMongoDB from "@/libs/mongodb";
import User from "@/model/users";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const { email, password } = await req.json();
        const hashedPassword = await hash(password, 10)
        await connectMongoDB();
        let user = await User.find({ email });
        console.log("user", user);

        return NextResponse.json({
            message: "Password Updated"
        }, {
            status: 201
        })
    } catch (error) {
        return NextResponse.json({
            message: "failed to update password"
        }, {
            status: 400
        })
    }
}