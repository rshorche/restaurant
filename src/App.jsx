import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import routes from "./routes";

export default function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Header />

      {router}

      <Footer />
    </>
  );
}
