import connectMongoDB from "@/libs/mongodb";
import User from "@/model/users";

export const getUserData = async (email) => {
    try {
        await connectMongoDB();
        const client = await User.find({ email });
        const user = client[0];
        return { name: user.name, image: user.image, email: user.email }
    } catch (error) {
        console.log("Failed to get user detail");
    }
}
