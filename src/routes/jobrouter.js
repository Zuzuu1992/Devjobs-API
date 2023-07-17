import express from "express";
import { getAllJobs } from "../controllers/project-controller.js";

const JobRouter = express.Router();

JobRouter.get("/jobs", getAllJobs);

export default JobRouter;
