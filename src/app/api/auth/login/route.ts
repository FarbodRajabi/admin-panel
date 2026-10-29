
import { NextResponse } from "next/server";
import { createSession } from "@/lib/session";

export async function POST(request: Request) {
    let body: unknown;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { message: "Invalid request" },
            { status: 400 }
        );
    }

    if (
        typeof body !== "object" ||
        body === null ||
        !("email" in body) ||
        !("password" in body)
    ) {
        return NextResponse.json(
            { message: "Invalid credentials" },
            { status: 400 }
        );
    }

    const { email, password } = body;

    if (
        email !== "admin@example.com" ||
        password !== "123456"
    ) {
        return NextResponse.json(
            { message: "Invalid email or password" },
            { status: 401 }
        );
    }

    await createSession();

    return NextResponse.json({
        message: "Login successful",
    });
}
