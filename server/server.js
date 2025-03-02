import express from "express";
import cors from "cors";
import openAIRoutes from './routes/openAiRoute.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use('/api', openAIRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

