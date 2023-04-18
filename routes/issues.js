import express from "express";
import { getIssues } from "../controllers/issues.js";

const router = express.Router();
router.get("/", getIssues());
export default router;
