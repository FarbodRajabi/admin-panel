
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    Layout,
    Button,
    Avatar,
    Space,
    Typography,
    message,
} from "antd";

import {
    UserOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { Text } = Typography;

interface AppHeaderProps {
    collapsed: boolean;
    onToggleSidebar: () => void;
}

export default function AppHeader({
    collapsed,
    onToggleSidebar,
}: AppHeaderProps) {
    const router = useRouter();

    const [loggingOut, setLoggingOut] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const handleLogout = async () => {
        setLoggingOut(true);

        try {
            const response = await fetch("/api/auth/logout", {
                method: "POST",
            });

            if (!response.ok) {
                throw new Error("Logout failed");
            }

            router.replace("/login");
            router.refresh();
        } catch {
            messageApi.error("Could not log out");
            setLoggingOut(false);
        }
    };

    return (
        <Header
            style={{
                background: "#fff",
                padding: "0 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            {contextHolder}

            <Button
                type="text"
                icon={
                    collapsed ? (
                        <MenuUnfoldOutlined />
                    ) : (
                        <MenuFoldOutlined />
                    )
                }
                onClick={onToggleSidebar}
            />

            <Space>
                <Avatar icon={<UserOutlined />} />

                <Text>Admin</Text>

                <Button
                    danger
                    icon={<LogoutOutlined />}
                    loading={loggingOut}
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Space>
        </Header>
    );
}
