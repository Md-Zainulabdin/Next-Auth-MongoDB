import connectMongoDB from "@/libs/mongodb";
import User from "@/model/User";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server"

export const POST = async (req) => {
    try {
        const { name, email, password } = await req.json();
        const hashedPassword = await hash(password, 10)

        await connectMongoDB();
        await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return NextResponse.json({
            message: "User Register"
        }, {
            status: 201
        })
    } catch (error) {
        NextResponse.json({
            status: 400,
            message: "Failed save user.."
        })
    }
}