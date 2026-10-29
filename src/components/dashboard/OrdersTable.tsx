
"use client";

import { Card, Table, Tag } from "antd";
import type { TableProps } from "antd";

import type { Order, OrderStatus } from "@/types/dashboard";

interface OrdersTableProps {
    orders: Order[];
}

const statusColors: Record<OrderStatus, string> = {
    Completed: "green",
    Pending: "orange",
    Cancelled: "red",
};

const columns: TableProps<Order>["columns"] = [
    {
        title: "Order ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Customer",
        dataIndex: "customer",
        key: "customer",
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
        render: (amount: number) => `$${amount}`,
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (status: OrderStatus) => (
            <Tag color={statusColors[status]}>
                {status}
            </Tag>
        ),
    },
];

export default function OrdersTable({
    orders,
}: OrdersTableProps) {
    return (
        <Card title="Recent Orders">
            <Table<Order>
                columns={columns}
                dataSource={orders}
                rowKey="id"
                pagination={false}
                scroll={{ x: 600 }}
            />
        </Card>
    );
}
