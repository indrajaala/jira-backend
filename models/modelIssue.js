import mongoose, { model } from "mongoose";

const modelIssueSchema = mongoose.Schema({
    type: String,
    summary: String,
    description: String,
    priority: String,
    status:String,
    estimate: Number,
    index:Number
});

const modelIssue = mongoose.model("modelIssueSchema", modelIssueSchema);

export default modelIssue;
