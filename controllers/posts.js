import modelPost from "../models/modelPost.js";

export const getPosts = async (req, res) => {
  try {
    const modelPosts = await modelPost.find();
    console.log("HELLO World")
    res.status(200).json(modelPosts);
  } catch (error) {
    console.log("error world");
    res.status(404).json({ message: error.message });
  }
};
