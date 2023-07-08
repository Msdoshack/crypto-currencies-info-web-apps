import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./App.css";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer" level={5}>
          <Typography.Title style={{ color: "white", textAlign: "center" }}>
            Info KryptMS <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges"> Exchanges</Link>
            <Link to="/news"> News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
