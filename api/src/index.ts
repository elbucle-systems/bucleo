import express from "express";

const app = express();

const PORT = 3000;

app.get("/api/health", (_req, res) => {
  res.json({ status: "Bucleo API is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
