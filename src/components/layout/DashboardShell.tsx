
"use client";

import { useState } from "react";
import { Layout } from "antd";

import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";

const { Content } = Layout;

interface DashboardShellProps {
    children: React.ReactNode;
}

export default function DashboardShell({
    children,
}: DashboardShellProps) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <AppSidebar
                collapsed={collapsed}
                onCollapse={setCollapsed}
            />

            <Layout style={{ minWidth: 0 }}>
                <AppHeader
                    collapsed={collapsed}
                    onToggleSidebar={() =>
                        setCollapsed((previous) => !previous)
                    }
                />

                <Content
                    style={{
                        margin: 24,
                        minWidth: 0,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
