import { Request, Response } from "express";
import { processDocument } from "../services/documents.services";

export const uploadDocument = async (req: Request, res: Response) => {
  try {
    const result = await processDocument(req.file);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error processing document" });
  }
};
