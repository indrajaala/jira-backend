import express from "express";
import { getIssues, createIssues, updateIssues } from "../controllers/issues.js";

const router = express.Router();
router.get("/", getIssues);
router.post("/", createIssues);
router.put("/", updateIssues)
export default router;
