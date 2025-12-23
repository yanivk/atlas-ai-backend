import { callPythonPost } from "./python.services";
import FormData from "form-data";

export async function processDocument(file: Express.Multer.File | undefined) {
  if (!file) throw new Error("No file uploaded");

  const form = new FormData();
  form.append("file", file.buffer, file.originalname);

  const response = await callPythonPost("/documents/parse", form, form.getHeaders());
  return response;
}
