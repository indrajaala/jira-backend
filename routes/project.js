import express from "express";
import {getProjects, updateProjects} from "../controllers/projects.js";

const router = express.Router();
router.get("/", getProjects);
router.put("/", updateProjects())
export default router;
