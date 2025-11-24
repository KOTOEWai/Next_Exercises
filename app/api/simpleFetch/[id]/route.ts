import { NextRequest } from "next/server";


export async function GET(request:NextRequest, { params }: { params: Promise<{ id: string }> }) {
 const id =  (await params).id;
return Response.json({ message: "Hello from Next.js!" , id });
}

export async function PATCH(request:NextRequest, { params }: { params: Promise<{ id: string }> }) {
 const id = (await params).id;
return Response.json({ message: "PATCH request received!", id });
}

export async function DELETE(request:NextRequest, { params }: {params: Promise<{ id: string }> }) {
 const id = (await params).id;
 const body = await request.json();
 const { confirm } = body;
return Response.json({ message: "DELETE request received!", id });
}