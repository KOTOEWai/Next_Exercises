import { NextResponse } from "next/server";

export function GET( res: NextResponse ){
  return NextResponse.json({ message: "Hello World" });
}
