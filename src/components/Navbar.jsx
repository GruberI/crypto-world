import React, { useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
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
    label: <a href="/exchanges">Exchanges</a>,
    key: "exchanges",
    icon: <MoneyCollectOutlined />,
  },
  {
    label: <a href="/news">News</a>,
    key: "news",
    icon: <BulbOutlined />,
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoWorld</Link>
          {/* <Button className="menu-control-container"></Button> */}
        </Typography.Title>
      </div>
      <Menu
        theme="dark"
        items={items}
        onClick={onClick}
        selectedKeys={[current]}
      />
      {/* <Menu.Item icon={<HomeOutlined />} key='home'>
            <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} key='crypto'>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />} key='exchanges'>
            <Link to='/exchanges'>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} key='news'>
            <Link to='/news'>News</Link>
        </Menu.Item>
      </Menu> */}
    </div>
  );
};

export default Navbar;
