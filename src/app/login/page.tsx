
"use client";

import { Button, Card, Form, Input, Typography, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

type LoginFormValues = {
    email: string;
    password: string;
};

export default function LoginPage() {
    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();


    const handleLogin = async (values: LoginFormValues) => {
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                messageApi.error("Invalid email or password");
                return;
            }

            messageApi.success("Login successful!");

            router.replace("/dashboard");
            router.refresh();
        } catch {
            messageApi.error("Something went wrong");
        }
    };


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
            {contextHolder}

            <Card
                style={{
                    width: "100%",
                    maxWidth: 400,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                }}
            >
                <div style={{ textAlign: "center", marginBottom: 32 }}>
                    <Title level={2}>Welcome Back</Title>
                    <Text type="secondary">
                        Sign in to your admin dashboard
                    </Text>
                </div>

                <Form<LoginFormValues>
                    layout="vertical"
                    onFinish={handleLogin}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: "Please enter your email" },
                            { type: "email", message: "Enter a valid email" },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="Enter your email"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: "Please enter your password" },
                            { min: 6, message: "Minimum 6 characters" },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Enter your password"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            block
                        >
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </main>
    );
}
