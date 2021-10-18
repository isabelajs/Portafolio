import React from "react";
import { Layout, Header, Footer } from "@components";
import "../styles/components/layout.scss";
import "../styles/general.scss";

const IndexPage = () => {
  return (
    <div className="layout">
      <Header />
      <Footer />
    </div>
  );
};

export default IndexPage;
