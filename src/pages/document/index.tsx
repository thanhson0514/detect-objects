import React from "react";
import DocumentContainer from "../../containers/document";

const Document: React.FC = () => {
  return (
    <div>
      <h1 className="prose-h1">Tài liệu nông sản</h1>
      <DocumentContainer />
    </div>
  );
};

export default Document;
