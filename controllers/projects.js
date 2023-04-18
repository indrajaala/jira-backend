import modelProject from "../models/modelProject.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await modelProject.find();
        res.status(200).json(projects);
    } catch (error) {
        console.log("error world");
        res.status(404).json({ message: error.message });
    }
};

export const updateProjects = async (req, res) => {
    try {
        const projects = await modelProject.updateOne({_id:req.query.id}, { $set: req.body });
        res.status(200).json(projects);
    } catch (error) {
        console.log("error world");
        res.status(404).json({ message: error.message });
    }
};
