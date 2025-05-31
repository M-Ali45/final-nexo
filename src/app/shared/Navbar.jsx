"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Menu, Dropdown, Input, Badge, Drawer } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { Search } = Input;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  // Dropdown menu items for each tab
  const menuItems = [
    {
      key: '1',
      label: 'Ceiling Lights',
      items: [
        { key: '1-1', label: 'Chandeliers', href: '/category/chandeliers' },
        { key: '1-2', label: 'Pendant Lights', href: '/category/pendant-lights' },
        { key: '1-3', label: 'Flush Mounts', href: '/category/flush-mounts' },
        { key: '1-4', label: 'Recessed Lights', href: '/category/recessed-lights' },
      ],
    },
    {
      key: '2',
      label: 'Wall Lights',
      items: [
        { key: '2-1', label: 'Sconces', href: '/category/sconces' },
        { key: '2-2', label: 'Wall Lamps', href: '/category/wall-lamps' },
        { key: '2-3', label: 'Picture Lights', href: '/category/picture-lights' },
        { key: '2-4', label: 'Swing Arm Lights', href: '/category/swing-arm-lights' },
      ],
    },
    {
      key: '3',
      label: 'Floor Lamps',
      items: [
        { key: '3-1', label: 'Arc Lamps', href: '/category/arc-lamps' },
        { key: '3-2', label: 'Tripod Lamps', href: '/category/tripod-lamps' },
        { key: '3-3', label: 'Torchiere', href: '/category/torchiere' },
        { key: '3-4', label: 'Task Lamps', href: '/category/task-lamps' },
      ],
    },
    {
      key: '4',
      label: 'Table Lamps',
      items: [
        { key: '4-1', label: 'Desk Lamps', href: '/category/desk-lamps' },
        { key: '4-2', label: 'Table Lights', href: '/category/table-lights' },
        { key: '4-3', label: 'Reading Lamps', href: '/category/reading-lamps' },
        { key: '4-4', label: 'Accent Lamps', href: '/category/accent-lamps' },
      ],
    },
    {
      key: '5',
      label: 'Outdoor Lights',
      items: [
        { key: '5-1', label: 'Solar Lights', href: '/category/solar-lights' },
        { key: '5-2', label: 'String Lights', href: '/category/string-lights' },
        { key: '5-3', label: 'Flood Lights', href: '/category/flood-lights' },
        { key: '5-4', label: 'Path Lights', href: '/category/path-lights' },
      ],
    },
    {
      key: '6',
      label: 'Smart Lighting',
      items: [
        { key: '6-1', label: 'Smart Bulbs', href: '/category/smart-bulbs' },
        { key: '6-2', label: 'Smart Strips', href: '/category/smart-strips' },
        { key: '6-3', label: 'Smart Panels', href: '/category/smart-panels' },
        { key: '6-4', label: 'Smart Switches', href: '/category/smart-switches' },
      ],
    },
    {
      key: '7',
      label: 'Bulbs & Accessories',
      items: [
        { key: '7-1', label: 'LED Bulbs', href: '/category/led-bulbs' },
        { key: '7-2', label: 'CFL Bulbs', href: '/category/cfl-bulbs' },
        { key: '7-3', label: 'Smart Bulbs', href: '/category/smart-bulbs' },
        { key: '7-4', label: 'Lamp Shades', href: '/category/lamp-shades' },
      ],
    },
    {
      key: '8',
      label: 'Specialty Lights',
      items: [
        { key: '8-1', label: 'Grow Lights', href: '/category/grow-lights' },
        { key: '8-2', label: 'UV Lights', href: '/category/uv-lights' },
        { key: '8-3', label: 'Stage Lights', href: '/category/stage-lights' },
        { key: '8-4', label: 'Emergency Lights', href: '/category/emergency-lights' },
      ],
    },
  ];

  // Create dropdown menus with smaller font size
  const dropdownMenus = menuItems.map((item) => (
    <Dropdown
      key={item.key}
      overlay={
        <Menu>
          {item.items.map((subItem) => (
            <Menu.Item key={subItem.key} className='!cursor-pointer'>
              <Link href={subItem.href} className="!text-xs lg:text-sm !cursor-pointer">
                {subItem.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      }
      trigger={['hover', 'click']}
    >
      <a className="text-xs xl:text-sm text-white hover:text-blue-500 mx-1 lg:mx-3 transition-colors cursor-pointer">
        {item.label}
      </a>
    </Dropdown>
  ));

  return (
    <nav className="bg-[#001529] shadow-md fixed w-full z-10 text-white h-[65px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/">
              <h2 className='text-3xl font-bold'>Logo</h2>
            </Link>
          </div>

          {/* Desktop Menu and Icons */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center space-x-2 ">
              {dropdownMenus}
            </div>
            <div className="flex items-center gap-3">
              <Search
                placeholder="Search products..."
                prefix={<SearchOutlined />}
                className="!w-32 2xl:w-48"
              />
              <Badge count={5}>
                <Link href="/cart">
                  <ShoppingCartOutlined className="text-xl !text-white hover:text-blue-500" />
                </Link>
              </Badge>
              <Link href="/profile">
                <UserOutlined className="text-xl text-gray-700 hover:text-blue-500" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button (Far Right) */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setVisible(true)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              <MenuOutlined className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
        width={280}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="vertical" className="border-none">
          {menuItems.map((item) => (
            <Menu.SubMenu key={item.key} title={item.label} className="text-sm">
              {item.items.map((subItem) => (
                <Menu.Item key={subItem.key}>
                  <Link href={subItem.href} className="text-sm">
                    {subItem.label}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
          <Menu.Item key="search" className="px-4 py-2">
            <Search
              placeholder="Search products..."
              prefix={<SearchOutlined />}
              className="w-full"
            />
          </Menu.Item>
          <Menu.Item key="cart">
            <Link href="/cart" className="flex items-center space-x-2">
              <Badge count={5}>
                <ShoppingCartOutlined className="text-xl text-gray-700" />
              </Badge>
              <span>Cart</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="profile">
            <Link href="/profile" className="flex items-center space-x-2">
              <UserOutlined className="text-xl text-gray-700" />
              <span>Profile</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
};

export default Navbar;