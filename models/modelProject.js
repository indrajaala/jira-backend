import mongoose, { model } from "mongoose";

const modelProjectSchema = mongoose.Schema({
    name: String,
    value: Number,
});

const modelProject = mongoose.model("modelProjectSchema", modelProjectSchema);

export default modelProject;
