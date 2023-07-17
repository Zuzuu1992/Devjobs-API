import Job from "../models/job.js";

export const getAllJobs = async (req, res) => {
  const data = await Job.find();
  return res.json(data);
};
