import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../components/images/cryptocurrency.png";

const items = [
  {
    label: <a href="/">Home</a>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <a href="/cryptocurrencies">Cryptocurrencies</a>,
    key: "cryptocurrencies",
    icon: <FundOutlined />,
  },
  {
    label: <a href="/news">News</a>,
    key: "news",
    icon: <BulbOutlined />,
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoWorld</Link>
          <Button
            className="menu-control-container"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <MenuOutlined />
          </Button>
        </Typography.Title>
      </div>
      {activeMenu && (
        <Menu
          theme="dark"
          items={items}
          onClick={onClick}
          selectedKeys={[current]}
        />
      )}
    </div>
  );
};

export default Navbar;
