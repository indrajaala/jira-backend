import express from "express";
import { getIssues, createIssues } from "../controllers/issues.js";

const router = express.Router();
router.get("/", getIssues);
router.post("/", createIssues);
export default router;
