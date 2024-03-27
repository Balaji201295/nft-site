import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  AboutCompany,
  BecomeArtist,
  DetailNFT,
  DiscoverNFT,
  Error,
  FAQ,
  Upload,
} from "./pages";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/discover-nft",
        element: <DiscoverNFT />,
      },
      {
        path: "/detail-nft/:id",
        element: <DetailNFT />,
      },
      {
        path: "/become-artist",
        element: <BecomeArtist />,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
      {
        path: "about",
        element: <AboutCompany />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
