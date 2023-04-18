import express from "express";
import {getIssues,getIssue, createIssues, updateIssues, deleteIssues} from "../controllers/issues.js";

const router = express.Router();
router.get("/", getIssues);
router.get("/:id", getIssue);
router.post("/", createIssues);
router.put("/", updateIssues);
router.delete("/", deleteIssues)
export default router;
