"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Dropdown, Input, Badge, Drawer } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
  HeartOutlined
} from "@ant-design/icons";

const { Search } = Input;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      key: "1",
      label: "Architectural",
      items: [
        { key: "1-1", label: "Chandeliers", href: "/architectural/chandeliers" },
        { key: "1-2", label: "Pendant Lights", href: "/architectural/pendant-lights" },
        { key: "1-3", label: "Flush Mounts", href: "/architectural/flush-mounts" },
        { key: "1-4", label: "Recessed Lights", href: "/architectural/recessed-lights" },
      ],
    },
    {
      key: "2",
      label: "Decorative",
      items: [
        { key: "2-1", label: "Sconces", href: "/electrical/sconces" },
        { key: "2-2", label: "Wall Lamps", href: "/electrical/wall-lamps" },
        { key: "2-3", label: "Picture Lights", href: "/electrical/picture-lights" },
        { key: "2-4", label: "Swing Arm Lights", href: "/electrical/swing-arm-lights" },
      ],
    },
    {
      key: "3",
      label: "Outdoor",
      items: [
        { key: "3-1", label: "Arc Lamps", href: "/decorative/arc-lamps" },
        { key: "3-2", label: "Tripod Lamps", href: "/decorative/tripod-lamps" },
        { key: "3-3", label: "Torchiere", href: "/decorative/torchiere" },
        { key: "3-4", label: "Task Lamps", href: "/decorative/task-lamps" },
      ],
    },
    {
      key: "4",
      label: "Smart Home",
      items: [
        { key: "4-1", label: "Desk Lamps", href: "/chandelier/desk-lamps" },
        { key: "4-2", label: "Table Lights", href: "/chandelier/table-lights" },
        { key: "4-3", label: "Reading Lamps", href: "/chandelier/reading-lamps" },
        { key: "4-4", label: "Accent Lamps", href: "/chandelier/accent-lamps" },
      ],
    },
    {
      key: "5",
      label: "Smart Glass",
      items: [
        { key: "5-1", label: "Solar Lights", href: "/outdoor/solar-lights" },
        { key: "5-2", label: "String Lights", href: "/outdoor/string-lights" },
        { key: "5-3", label: "Flood Lights", href: "/outdoor/flood-lights" },
        { key: "5-4", label: "Path Lights", href: "/outdoor/path-lights" },
      ],
    },
    {
      key: "6",
      label: "Digital Sign",
      items: [
        { key: "6-1", label: "Smart Bulbs", href: "/smart-home/smart-bulbs" },
        { key: "6-2", label: "Smart Strips", href: "/smart-home/smart-strips" },
        { key: "6-3", label: "Smart Panels", href: "/smart-home/smart-panels" },
        { key: "6-4", label: "Smart Switches", href: "/smart-home/smart-switches" },
      ],
    },
    {
      key: "7",
      label: "LED Bulbs",
      items: [
        { key: "7-1", label: "LED Bulbs", href: "/digital-sign/led-bulbs" },
        { key: "7-2", label: "CFL Bulbs", href: "/digital-sign/cfl-bulbs" },
        { key: "7-3", label: "Smart Bulbs", href: "/digital-sign/smart-bulbs" },
        { key: "7-4", label: "Lamp Shades", href: "/digital-sign/lamp-shades" },
      ],
    },
    {
      key: "8",
      label: "Accessories",
      items: [
        { key: "8-1", label: "Grow Lights", href: "/shop-more/grow-lights" },
        { key: "8-2", label: "UV Lights", href: "/shop-more/uv-lights" },
        { key: "8-3", label: "Stage Lights", href: "/shop-more/stage-lights" },
        { key: "8-4", label: "Emergency Lights", href: "/shop-more/emergency-lights" },

      ],
    },
  ];
  const dropdownMenus = menuItems.map((item) => (
    <Dropdown
      key={item.key}
      overlay={
        <Menu className="shadow-lg rounded-md">
          {item.items.map((subItem) => (
            <Menu.Item key={subItem.key}>
              <Link href={subItem.href} className="text-sm text-gray-700 hover:text-blue-500">
                {subItem.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      }
      trigger={["hover", "click"]}
    >
      <a className="text-sm xl:text-lg font-medium xl:font-semibold text-gray-900 hover:!text-[#0097b2] mx-3 lg:mx-5 transition-colors cursor-pointer">
        {item.label}
      </a>
    </Dropdown>
  ));

  return (
    <>
      {/* First Header - Movable on scroll */}
      <nav className={`bg-white shadow-sm w-full !px-1 z-20 h-[80px] flex items-center transition-all duration-300 ${scrollY > 0 ? 'translate-y-[-80px]' : ''}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex flex-col">
            <Link href="/">
              <h2 className="text-lg md:text-3xl font-extrabold tracking-tight"style={{ color:'#0097B2'}}>Nexo</h2>
            </Link>
          </div>

          {/* Right Section: Icons and Mobile Menu */}
          <div className="flex items-center space-x-4 w-auto xl:w-[70%] justify-between">
            {/* Hide search on mobile, show icons */}
            <div className="hidden lg:block">
              <Search
                placeholder="Search products..."
                prefix={<SearchOutlined />}
                className="!w-80 rounded-full border-gray-300"
              />
            </div>
            <div className="flex space-x-5 items-center">
              <Link href="/login" className="flex items-center space-x-1">
                <UserOutlined className="text-lg text-gray-600 hover:text-blue-500" />
                <span className="text-sm text-gray-600 hover:text-blue-500 hidden md:inline">Login / Signup</span>
              </Link>
              <div>
                <Badge count={5}>
                  <Link href="/cart">
                    <ShoppingCartOutlined className="text-lg text-gray-600 hover:text-blue-500" />
                  </Link>
                </Badge>
              </div>
              <Link href="/wishlist" >
                <HeartOutlined className="text-lg text-gray-600 hover:text-blue-500" />
              </Link>
              <div>
                <select className="text-sm text-gray-600 border-none focus:outline-none">
                  <option value="AED">AED</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <Link href="/quote">
                <span className="text-sm text-white hover:text-blue-800 font-medium border-2 border-black px-3 bg-black py-2">My Quote</span>
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setVisible(true)}
                className="text-gray-600 hover:text-blue-500 focus:outline-none"
              >
                <MenuOutlined className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </nav>


      {/* Second Header - Sticky on scroll */}
      <nav className=" shadow-sm w-full !px-1 z-10 h-[50px] flex items-center sticky top-0 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center space-x-2 overflow-x-auto">
            {/* Show search on mobile, hide dropdowns */}
            <div className="lg:hidden w-full m-0 ">
              <Search
                placeholder="Search products..."
                prefix={<SearchOutlined />}
                className="w-full rounded-full border-gray-300"
              />
            </div>
            <div className="hidden lg:flex justify-between items-center space-x-2 overflow-x-auto mx-auto uppercase">
              {dropdownMenus}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
        width={280}
      >
        <Menu mode="vertical">
          {menuItems.slice(0, 8).map((item) => (
            <Menu.SubMenu key={item.key} title={item.label}>
              {item.items.map((subItem) => (
                <Menu.Item key={subItem.key}>
                  <Link href={subItem.href} className="text-sm text-gray-700 hover:text-blue-500">
                    {subItem.label}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}



        </Menu>
      </Drawer>
    </>
  );
};

export default Navbar;