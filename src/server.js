import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import JobRouter from "./routes/jobrouter.js";
import connect from "./databases/mongo.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

const app = express();
dotenv.config();
connect();

app.use(bodyParser.json());
app.use(cors());

// app.get("/", (req, res) => {
//   return res.status(200).json({ message: "App works!" });
// });

app.use("/api", JobRouter);
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3000);
