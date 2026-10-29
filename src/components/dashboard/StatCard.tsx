
"use client";

import type { ReactNode } from "react";
import { Card, Statistic } from "antd";

interface StatCardProps {
    title: string;
    value: number;
    prefix?: ReactNode;
    suffix?: string;
    precision?: number;
    color?: string;
}

export default function StatCard({
    title,
    value,
    prefix,
    suffix,
    precision,
    color,
}: StatCardProps) {
    return (
        <Card>
            <Statistic
                title={title}
                value={value}
                prefix={prefix}
                suffix={suffix}
                precision={precision}
                styles={
                    color
                        ? { content: { color } }
                        : undefined
                }
            />
        </Card>
    );
}
