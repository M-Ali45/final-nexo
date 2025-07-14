import React from 'react';
import { Card, Row, Col } from 'antd';
import Link from 'next/link';

const menuItems = [
  {
    key: "1",
    label: "architectural",
    items: [
      { key: "1-1", label: "Chandeliers", href: "/architectural/chandeliers" },
      { key: "1-2", label: "Pendant Lights", href: "/architectural/pendant-lights" },
      { key: "1-3", label: "Flush Mounts", href: "/architectural/flush-mounts" },
      { key: "1-4", label: "Recessed Lights", href: "/architectural/recessed-lights" },
    ],
  },
  {
    key: "2",
    label: "decorative",
    items: [
      { key: "2-1", label: "Sconces", href: "/decorative/sconces" },
      { key: "2-2", label: "Wall Lamps", href: "/decorative/wall-lamps" },
      { key: "2-3", label: "Picture Lights", href: "/decorative/picture-lights" },
      { key: "2-4", label: "Swing Arm Lights", href: "/decorative/swing-arm-lights" },
    ],
  },
  {
    key: "3",
    label: "outdoor",
    items: [
      { key: "3-1", label: "Arc Lamps", href: "/outdoor/arc-lamps" },
      { key: "3-2", label: "Tripod Lamps", href: "/outdoor/tripod-lamps" },
      { key: "3-3", label: "Torchiere", href: "/outdoor/torchiere" },
      { key: "3-4", label: "Task Lamps", href: "/outdoor/task-lamps" },
    ],
  },
  {
    key: "4",
    label: "smart-home",
    items: [
      { key: "4-1", label: "Desk Lamps", href: "/smart-home/desk-lamps" },
      { key: "4-2", label: "Table Lights", href: "/smart-home/table-lights" },
      { key: "4-3", label: "Reading Lamps", href: "/smart-home/reading-lamps" },
      { key: "4-4", label: "Accent Lamps", href: "/smart-home/accent-lamps" },
    ],
  },
  {
    key: "5",
    label: "smart-glass",
    items: [
      { key: "5-1", label: "Solar Lights", href: "/smart-glass/solar-lights" },
      { key: "5-2", label: "String Lights", href: "/smart-glass/string-lights" },
      { key: "5-3", label: "Flood Lights", href: "/smart-glass/flood-lights" },
      { key: "5-4", label: "Path Lights", href: "/smart-glass/path-lights" },
    ],
  },
  {
    key: "6",
    label: "digital-sign",
    items: [
      { key: "6-1", label: "Smart Bulbs", href: "/digital-sign/smart-bulbs" },
      { key: "6-2", label: "Smart Strips", href: "/digital-sign/smart-strips" },
      { key: "6-3", label: "Smart Panels", href: "/digital-sign/smart-panels" },
      { key: "6-4", label: "Smart Switches", href: "/digital-sign/smart-switches" },
    ],
  },
  {
    key: "7",
    label: "led-bulbs",
    items: [
      { key: "7-1", label: "LED Bulbs", href: "/digital-sign/led-bulbs" },
      { key: "7-2", label: "CFL Bulbs", href: "/digital-sign/cfl-bulbs" },
      { key: "7-3", label: "Smart Bulbs", href: "/digital-sign/smart-bulbs" },
      { key: "7-4", label: "Lamp Shades", href: "/digital-sign/lamp-shades" },
    ],
  },
  {
    key: "8",
    label: "accessories",
    items: [
      { key: "8-1", label: "Grow Lights", href: "/shop-more/grow-lights" },
      { key: "8-2", label: "UV Lights", href: "/shop-more/uv-lights" },
      { key: "8-3", label: "Stage Lights", href: "/shop-more/stage-lights" },
      { key: "8-4", label: "Emergency Lights", href: "/shop-more/emergency-lights" },
    ],
  },
];

const ShowCategory = ({ category }) => {
  // Find the category object that matches the provided category name
  const selectedCategory = menuItems.find((item) => item.label === category);

  // If category is not found, display a fallback message
  if (!selectedCategory) {
    return <div>Category not found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>{category}</h2> */}
      <Row gutter={[16, 16]}>
        {selectedCategory.items.map((subcategory) => (
          <Col key={subcategory.key} xs={24} sm={12} md={8} lg={6}>
            <Link href={subcategory.href}>
              <Card
                hoverable
                style={{ textAlign: 'center' }}
                cover={
                  <div style={{ height: '150px', background: '#f5f5f5' }} >
                    {/* Placeholder for subcategory image */}
                    <img
                      alt={subcategory.label}
                      src={`/images/home/light2.jpeg`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius:"10px 10px 0px 0px" }}

                    />
                  </div>
                }
              >
                <Card.Meta title={subcategory.label} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ShowCategory;