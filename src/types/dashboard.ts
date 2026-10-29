
export type OrderStatus =
    | "Completed"
    | "Pending"
    | "Cancelled";

export interface Order {
    id: string;
    customer: string;
    amount: number;
    status: OrderStatus;
}

export interface DashboardStats {
    totalUsers: number;
    revenue: number;
    orders: number;
    growth: number;
}
