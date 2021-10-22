import React from "react";
import { Link } from "gatsby";
import "../styles/components/notFound.scss";

export default function NotFound() {
  return (
    <div className="mainContainer fillHeight">
      <h1 className="title">404</h1>
      <h2 className="subtitle">Page Not Found</h2>
      <Link className="button button--big" to="/">
        Go Home
      </Link>
    </div>
  );
}
