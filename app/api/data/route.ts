import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // This API route will receive custom headers added by middleware
  const headers = request.headers

  return NextResponse.json({
    message: "API data retrieved successfully",
    customHeaders: {
      "X-API-Version": headers.get("X-API-Version"),
      "X-Custom-Header": headers.get("X-Custom-Header"),
      "X-Request-Time": headers.get("X-Request-Time"),
    },
    timestamp: new Date().toISOString(),
  })
}
