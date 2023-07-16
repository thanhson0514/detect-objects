import documents from "./documents.json";
import documentDetail from "./document-detail.json";

import { typeDetailDocument } from "./types";

const fetchAllDocuments = () => {
  return documents;
};

const splitCategoryDocument = (category_id: number): typeDetailDocument[] => {
  return documentDetail.filter(
    (item: typeDetailDocument) => item.category_id === category_id
  );
};

const fetchSingleDocument = (id: number) => {
  return documentDetail.filter((item: typeDetailDocument) => item.id === id);
};

export { fetchAllDocuments, fetchSingleDocument, splitCategoryDocument };
