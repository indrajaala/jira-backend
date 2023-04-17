import mongoose, { model } from "mongoose";

const modelProjectSchema = mongoose.Schema({
    name: String,
    url: String,
    description: String,
    category: String

});

const modelProject = mongoose.model("modelProjectSchema", modelProjectSchema);

export default modelProject;
