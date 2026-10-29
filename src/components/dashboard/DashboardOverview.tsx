
"use client";

import { Row, Col, Typography } from "antd";
import RevenueChart from "./RevenueChart";

import {
    UserOutlined,
    DollarOutlined,
    ShoppingCartOutlined,
    DashboardOutlined,
} from "@ant-design/icons";

import { dashboardStats, orders } from "@/data/dashboard";

import StatCard from "./StatCard";
import OrdersTable from "./OrdersTable";

const { Title, Text } = Typography;

export default function DashboardOverview() {
    return (
        <div>
            <Title level={2}>Dashboard</Title>

            <Text type="secondary">
                Welcome back! Here is your business overview.
            </Text>

            <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
                <Col xs={24} sm={12} lg={6}>
                    <StatCard
                        title="Total Users"
                        value={dashboardStats.totalUsers}
                        prefix={<UserOutlined />}
                    />
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <StatCard
                        title="Revenue"
                        value={dashboardStats.revenue}
                        prefix={<DollarOutlined />}
                        suffix="$"
                    />
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <StatCard
                        title="Orders"
                        value={dashboardStats.orders}
                        prefix={<ShoppingCartOutlined />}
                    />
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <StatCard
                        title="Growth"
                        value={dashboardStats.growth}
                        prefix={<DashboardOutlined />}
                        suffix="%"
                        precision={1}
                        color="#3f8600"
                    />
                </Col>
            </Row>

            <div style={{ marginTop: 24 }}>
                <RevenueChart />
            </div>
            <div style={{ marginTop: 24 }}>
                <OrdersTable orders={orders} />
            </div>
        </div>
    );
}
