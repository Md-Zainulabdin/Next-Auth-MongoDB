import connectMongoDB from "@/libs/mongodb";
import User from "@/model/users";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server"

export const POST = async (req) => {
    try {
        const { name, email, password, image } = await req.json();
        const hashedPassword = await hash(password, 10)
        await connectMongoDB();
        await User.create({
            name,
            email,
            password: hashedPassword,
            image,
        });

        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 500 }
        );
    }
}