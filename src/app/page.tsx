"use client";

import { Button, Card, Space, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fa",
        padding: 24,
      }}
    >
      <Card style={{ width: 420, maxWidth: "100%" }}>
        <Space orientation="vertical" size="middle">
          <Title level={2}>Admin Panel</Title>

          <Paragraph>
            My first Next.js application with Ant Design.
          </Paragraph>

          <Button type="primary">
            Get Started
          </Button>
        </Space>
      </Card>
    </main>
  );
}