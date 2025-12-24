// src/routes/rag.routes.ts
import { Router } from "express";
import { indexDocument, queryDocument } from "../controllers/rag.controllers";

const router = Router();

router.post("/index", indexDocument);
router.post("/query", queryDocument);

export default router;
