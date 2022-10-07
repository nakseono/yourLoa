import React from "react";
import "antd/dist/antd.css";

import Head from "next/head";

const YourLoa = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Component />
    </>
  );
};

export default YourLoa;
