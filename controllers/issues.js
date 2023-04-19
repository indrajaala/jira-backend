import modelIssue from "../models/modelIssue.js";

export const getIssues = async (req, res) => {
    try {
        const issues = await modelIssue.find().sort("index");
        res.status(200).json(issues);
    } catch (error) {
        console.log("error world");
        res.status(404).json({ message: error.message });
    }
};

export const getIssue = async(req, res) => {
    try {
        const issue = await modelIssue.findOne({_id:req.params.id});
        res.status(200).json(issue);
    } catch (error) {
        console.log("error world");
        res.status(404).json({ message: error.message });
    }
}

export const createIssues = async (req, res) => {
    try{
        console.log("the body is", req.body)
        const issue = await modelIssue.create(req.body);
        res.status(200).json(issue);

    } catch (error) {
        console.log("error world");
        res.status(404).json({ message: error.message });
    }
}

export const updateIssues = async (req, res) => {
    try{
        console.log("the body is",req.body);
        const issue = await modelIssue.updateOne({_id:req.query.id}, { $set: req.body });
        res.status(200).json(issue);

    } catch (error) {
        console.log("error world");
        res.status(404).json({ message: error.message });
    }
}

export const deleteIssues = async (req, res) => {
    try{
        const issue = await modelIssue.deleteOne({_id:req.query.id});
        res.status(200).json(issue);

    } catch (error) {
        console.log("error world");
        res.status(404).json({ message: error.message });
    }
}