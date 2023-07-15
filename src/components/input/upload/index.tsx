import React, { FC, useState } from "react";
import { Button } from "@mui/material";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./upload.css";

const Upload: FC = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent) => {
    const files = e.target["files"];
    console.log("FILE:", files);
    files[0] && setFileName(files[0].name);
    if (files) {
      setImage(URL.createObjectURL(files[0]));
    }
  };

  return (
    <div className="container-camera">
      <h1 className="prose-h1">Quét nông sản</h1>
      <form
        onSubmit={onSubmit}
        onClick={() => {
          let element: HTMLElement = document.querySelector(
            ".input-field"
          ) as HTMLElement;
          element.click();
        }}>
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          onChange={onChange}
        />

        {image ? (
          <img src={image} width={200} height={200} alt={fileName} />
        ) : (
          <>
            <CloudUploadOutlinedIcon
              fontSize="large"
              sx={{ color: "rgb(238, 174, 115)", fontSize: 30 }}
            />
            <p>Browse Files to upload</p>
          </>
        )}
      </form>

      <section className="uploaded-row">
        <PhotoSizeSelectActualOutlinedIcon fontSize="large" />
        <span className="upload-content">
          {fileName} -
          <DeleteOutlineOutlinedIcon
            onClick={() => {
              setFileName("No selected File");
              setImage(null);
            }}
          />
        </span>
      </section>
      <Button variant="contained" disabled={!image}>
        NHẬN DẠNG
      </Button>
    </div>
  );
};

export default Upload;
