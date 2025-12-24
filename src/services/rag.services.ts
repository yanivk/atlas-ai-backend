import { callPythonPost } from "./python.services";

export async function indexDocumentRag(docId: string, text: string) {
  return await callPythonPost("rag/index", { doc_id: docId, text });
}

export async function queryRag(docId: string, question: string, k = 5) {
  return await callPythonPost("rag/query", { doc_id: docId, question, k });
}
