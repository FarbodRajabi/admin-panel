
import type {
    DashboardStats,
    Order,
} from "@/types/dashboard";

export const dashboardStats: DashboardStats = {
    totalUsers: 1248,
    revenue: 45200,
    orders: 326,
    growth: 12.5,
};

export const orders: Order[] = [
    {
        id: "1024",
        customer: "John Doe",
        amount: 240,
        status: "Completed",
    },
    {
        id: "1025",
        customer: "Sarah Smith",
        amount: 560,
        status: "Pending",
    },
    {
        id: "1026",
        customer: "David Wilson",
        amount: 180,
        status: "Completed",
    },
    {
        id: "1027",
        customer: "Emma Brown",
        amount: 320,
        status: "Cancelled",
    },
];




export interface RevenueData {
    month: string;
    revenue: number;
}

export const revenueData: RevenueData[] = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 18000 },
    { month: "Mar", revenue: 15500 },
    { month: "Apr", revenue: 24000 },
    { month: "May", revenue: 21000 },
    { month: "Jun", revenue: 32000 },
    { month: "Jul", revenue: 29000 },
    { month: "Aug", revenue: 38000 },
    { month: "Sep", revenue: 35000 },
    { month: "Oct", revenue: 45200 },
];
