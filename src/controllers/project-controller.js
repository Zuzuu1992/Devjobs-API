import Job from "../models/job.js";

export const getAllJobs = async (req, res) => {
  const { perPage, page } = req.params;

  try {
    const perPageInt = parseInt(perPage, 10);
    const pageInt = parseInt(page, 10);
    if (isNaN(perPageInt) || isNaN(pageInt)) {
      return res
        .status(400)
        .json({ error: "Invalid page or perPage parameter" });
    }

    const jobs = await Job.find()
      .skip((pageInt - 1) * perPageInt)
      .limit(perPageInt);

    res.status(200).json(jobs);
  } catch (err) {
    console.error("Error while processing request:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
