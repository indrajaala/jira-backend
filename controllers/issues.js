import modelIssue from "../models/modelIssue.js";

export const getIssues = async (req, res) => {
    try {
        const issues = await modelIssue.find();
        res.status(200).json(issues);
    } catch (error) {
        console.log("error world");
        res.status(404).json({ message: error.message });
    }
};

export const createIssues = async (req, res) => {
    try{
        console.log("the body is", req.body);
        // const issue = await modelIssue.create(req.body);

    } catch (error) {
        console.log("error world");
        res.status(404).json({ message: error.message });
    }
}
