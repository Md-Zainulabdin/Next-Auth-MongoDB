import connectMongoDB from "@/libs/mongodb";
import User from "@/model/users";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        let { email, image } = await req.json();
        await connectMongoDB();
        const user = await User.updateOne({ email }, {
            $set: {
                image
            }
        });

        return NextResponse.json({
            message: "Image set successfully"
        }, {
            status: 201
        })
    } catch (error) {
        return NextResponse.json({
            message: "failed to upload image"
        }, {
            status: 400
        })
    }
}