import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
import { Footer } from "./containers";
import styles from "./style";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
