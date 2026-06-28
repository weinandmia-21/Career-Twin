// @ts-ignore
import pdf from "pdf-parse/lib/pdf-parse.js";

export async function extractPdfText(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());

  const data = await pdf(buffer);

  return {
    text: data.text,
    pages: data.numpages,
  };
}