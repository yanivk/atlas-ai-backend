import { Router } from "express";
import { callPythonGet } from "../services/python.services";

const router = Router();

router.get("/python/health", async (_req, res) => {
  try {
    const response = await callPythonGet("health", {});
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Python service unreachable" });
  }
});

router.get("/health", (_req, res) => {
  res.json({ message: "Atlas AI backend is healthy" });
});

export default router;
