import express from "express";
import { getAllJobs } from "../controllers/project-controller.js";

const JobRouter = express.Router();

JobRouter.get("/jobs/:perPage/:page", getAllJobs);

export default JobRouter;
