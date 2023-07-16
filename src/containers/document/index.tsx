import React, { useState, useEffect } from "react";
import { typeDocuments } from "../../data/types";
import { fetchAllDocuments } from "../../data";
import ItemDocument from "../../components/document/item-document";

const DocumentContainer: React.FC = () => {
  const [documents, setDocuments] = useState<typeDocuments[]>([]);

  const fetchData = async () => {
    const data: typeDocuments[] = await fetchAllDocuments();
    setDocuments(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {documents.map((document) => (
        <div key={document.id}>
          <h2>{document.title}</h2>
          <ItemDocument id={document.id} key={document.id} />
        </div>
      ))}
    </div>
  );
};

export default DocumentContainer;
