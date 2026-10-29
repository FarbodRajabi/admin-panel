
"use client";

import { Layout, Menu } from "antd";

import {
    DashboardOutlined,
    UserOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

interface AppSidebarProps {
    collapsed: boolean;
    onCollapse: (value: boolean) => void;
}

const menuItems = [
    {
        key: "dashboard",
        icon: <DashboardOutlined />,
        label: "Dashboard",
    },
    {
        key: "users",
        icon: <UserOutlined />,
        label: "Users",
        disabled: true,
    },
    {
        key: "settings",
        icon: <SettingOutlined />,
        label: "Settings",
        disabled: true,
    },
];

export default function AppSidebar({
    collapsed,
    onCollapse,
}: AppSidebarProps) {
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            onBreakpoint={onCollapse}
            breakpoint="lg"
            width={220}
            trigger={null}
        >
            <div
                style={{
                    height: 64,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                }}
            >
                {collapsed ? "AP" : "Admin Panel"}
            </div>

            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={["dashboard"]}
                items={menuItems}
            />
        </Sider>
    );
}
