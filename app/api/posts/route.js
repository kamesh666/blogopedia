import { connectMongo } from "@/utils/connectMongo";
import PostModel from "@/models/postModel";

export async function GET() {
  try {
    await connectMongo();
    const postData = await PostModel.find();
    return Response.json(postData);
  } catch (error) {
    return Response.json({ message: error.message });
  }
}

export async function POST(req, res) {
  try {
    await connectMongo();
    if (
      !req.body ||
      !req.body.name ||
      !req.body.description ||
      !req.body.image
    ) {
      return res.status(400).json({
        message: "Missing required properties in the request body",
      });
    }
    const { name, description, image } = req.body;
    const postData = await PostModel.create({ name, description, image });
    return res.json({ postData, message: "post successfully created" });
  } catch (error) {
    return res.json({ message: error.message });
  }
}
