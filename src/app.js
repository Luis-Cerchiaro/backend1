import express from "express";
import { router } from "./routes/index.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes for the project
app.use("/api/v1", router);

export default app;
