import React from "react";
import "../styles/general.scss";
import {
  Layout,
  Hero,
  About,
  Jobs,
  Featured,
  Projects,
  Contact,
} from "@components";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Hero />
      <About />
    </Layout>
  );
};

export default IndexPage;
