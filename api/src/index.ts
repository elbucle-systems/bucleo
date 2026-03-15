import "dotenv/config";
import express from "express";
import instructionalDesignRouter from "./routes/instructionalDesignRoutes";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/api/health", (_req, res) => {
  res.json({ status: "Bucleo API is running" });
});

app.use("/api/instructional-design", instructionalDesignRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
