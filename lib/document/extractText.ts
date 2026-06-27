import { getDocument } from "pdfjs-dist";

export async function extractText(file: File) {
  const buffer = await file.arrayBuffer();

  const pdf = await getDocument({
    data: buffer,
  }).promise;

  let text = "";

  for (let page = 1; page <= pdf.numPages; page++) {
    const currentPage = await pdf.getPage(page);

    const content = await currentPage.getTextContent();

    text +=
      content.items
        .map((item: any) => item.str)
        .join(" ") + "\n";
  }

  return text;
}