import React, { useEffect, useState } from "react";
import { typeDetailDocument } from "../../../data/types";
import { splitCategoryDocument } from "../../../data";

const ItemDocument: React.FC<{ id: number }> = ({ id }) => {
  const [documents, setDocuments] = useState<typeDetailDocument[]>();

  const fetchData = () => {
    const data: typeDetailDocument[] = splitCategoryDocument(id);
    setDocuments(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Item Document</div>;
};

export default ItemDocument;
