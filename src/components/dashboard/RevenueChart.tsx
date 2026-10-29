
"use client";

import { Card } from "antd";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import { revenueData } from "@/data/dashboard";

export default function RevenueChart() {
    return (
        <Card title="Monthly Revenue">
            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis
                            tickFormatter={(value: number) =>
                                `$${value / 1000}k`
                            }
                        />

                        <Tooltip
                            formatter={(value) =>
                                typeof value === "number"
                                    ? `$${value.toLocaleString()}`
                                    : String(value ?? "")
                            }
                        />

                        <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#1677ff"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                            activeDot={{ r: 7 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
