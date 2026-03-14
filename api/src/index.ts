import "dotenv/config";
import express from "express";
import { OpenRouter } from "@openrouter/sdk";

const app = express();

const PORT = 3000;

app.get("/api/health", (_req, res) => {
  res.json({ status: "Bucleo API is running" });
});

app.get("/api/test-ai", async (_req, res) => {
  const openrouter = new OpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  const result = openrouter.callModel({
    model: "openrouter/hunter-alpha",
    input: "Explain the bloom's taxonomy in a simple way",
  });

  const joke = await result.getText();
  res.json({ joke });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
