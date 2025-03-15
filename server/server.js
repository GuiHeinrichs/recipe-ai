import express from "express";
import cors from "cors";
import openAIRoutes from "./routes/openAIRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());
app.use("/api", openAIRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
