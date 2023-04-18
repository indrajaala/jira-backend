import express from "express";
import {getIssues, createIssues, updateIssues, deleteIssues} from "../controllers/issues.js";

const router = express.Router();
router.get("/", getIssues);
router.post("/", createIssues);
router.put("/", updateIssues);
router.delete("/", deleteIssues)
export default router;
