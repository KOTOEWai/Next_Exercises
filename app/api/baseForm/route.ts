import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Base } from "@/models/baseFrom";


export async function POST(req: Request) {
    await connectToDB();

    const body = await req.json();
    const base = await Base.create(body);

    return NextResponse.json({ message: "Base created", base });
}