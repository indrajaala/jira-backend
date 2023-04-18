import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import projectRoutes from "./routes/project.js";
import issueRoutes from "./routes/issues.js";
import { config } from "dotenv";

config();

const app = express();
app.use(cors());
app.use("/posts", postRoutes);
app.use("/projects", projectRoutes);
app.use("/issues", issueRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 3000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
