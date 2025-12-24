// src/controllers/rag.controller.ts
import { Request, Response } from "express";
import { indexDocumentRag, queryRag } from "../services/rag.services";

export const indexDocument = async (req: Request, res: Response) => {
  try {
    const { docId, text } = req.body;
    const result = await indexDocumentRag(docId, text);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error indexing document" });
  }
};

export const queryDocument = async (req: Request, res: Response) => {
  try {
    const { docId, question, k } = req.body;
    const result = await queryRag(docId, question, k);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error querying document" });
  }
};
