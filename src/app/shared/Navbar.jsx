'use client';

import React, { useState } from 'react';
import {
  Layout,
  Dropdown,
  Button,
  Drawer,
  Space,
  Grid,
  Input,
  Tooltip,
} from 'antd';
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content } = Layout;
const { useBreakpoint } = Grid;
const { Search } = Input;

// Categories for dropdowns
const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

// Tab names
const tabLabels = [
  'Decorative',
  'Architecturer',
  'Outdoor',
  'Smart Home',
  'Smart Flim',
  'Digital Sign',
  'Lamps',
  'Electrical Accessories',
];

// Generate dropdown items
const navItems = tabLabels.map((label, index) => ({
  label,
  key: `tab-${index + 1}`,
  children: categories.map((cat, i) => ({
    key: `cat-${index + 1}-${i + 1}`,
    label: cat,
  })),
}));

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();

  const renderDropdown = (tab) => (
    <Dropdown
      menu={{ items: tab.children }}
      key={tab.key}
      trigger={['hover']}
    >
      <a onClick={(e) => e.preventDefault()} style={{ color: '#fff' }}>
        {tab.label}
      </a>
    </Dropdown>
  );

  return (
    <Header
      style={{
        backgroundColor: '#001529',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        flexWrap: 'wrap',
      }}
    >
      {/* Logo */}
      <div
        style={{
          color: '#00bfff',
          fontWeight: 'bold',
          fontSize: '20px',
        }}
      >
        MyLogo
      </div>

      {/* Desktop: Tabs + Icons + Search */}
      {screens.md ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Space size="large">{navItems.map(renderDropdown)}</Space>

          {/* Login + Cart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Tooltip title="Customer Login">
              <UserOutlined style={{ color: '#fff', fontSize: '18px', cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip title="Cart">
              <ShoppingCartOutlined style={{ color: '#fff', fontSize: '18px', cursor: 'pointer' }} />
            </Tooltip>

            {/* Search */}
            <Search
              placeholder="Search..."
              allowClear
              style={{ width: 200 }}
            />
          </div>
        </div>
      ) : (
        // Mobile: Menu + icons
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <UserOutlined style={{ color: '#fff', fontSize: '18px' }} />
          <ShoppingCartOutlined style={{ color: '#fff', fontSize: '18px' }} />
          <SearchOutlined
            style={{ color: '#fff', fontSize: '18px', cursor: 'pointer' }}
            onClick={() => console.log('Search icon clicked')}
          />
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: '#fff', fontSize: '20px' }} />}
            onClick={() => setDrawerVisible(true)}
          />
        </div>
      )}

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        {navItems.map((tab) => (
          <Dropdown
            key={tab.key}
            menu={{ items: tab.children }}
            trigger={['click']}
          >
            <a
              onClick={(e) => e.preventDefault()}
              style={{
                display: 'block',
                padding: '10px 0',
                fontWeight: 500,
              }}
            >
              {tab.label}
            </a>
          </Dropdown>
        ))}

       
        <div style={{ marginTop: '16px' }}>
          <Search
            placeholder="Search..."
            allowClear
            style={{ width: '100%', marginBottom: 16 }}
          />
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button icon={<UserOutlined />} block>
              Login
            </Button>
            <Button icon={<ShoppingCartOutlined />} block>
              Cart
            </Button>
          </div>
        </div>
      </Drawer>
    </Header>
  );
};

const HomePage = () => (
  <Layout>
    <Navbar />
    <Content style={{ padding: 24 }}>
      
    </Content>
  </Layout>
);

export default HomePage;

