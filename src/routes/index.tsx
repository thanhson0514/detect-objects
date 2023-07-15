import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Document from "../pages/document";
import Camera from "../pages/camera";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />) as React.ReactNode,
  },
  {
    path: "/documents",
    element: (<Document />) as React.ReactNode,
  },
  {
    path: "/camera",
    element: (<Camera />) as React.ReactNode,
  },
]);

export default router;
