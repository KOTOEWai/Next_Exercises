import { NextRequest , NextResponse } from "next/server";
import { cookies } from "next/headers";
import { headers } from "next/headers";
export async function GET(request: NextRequest , response:NextResponse ) {
     
   // console.log(request);
  //URL ဖတ်မယ်
     console.log(request.url);
     console.log(request.method)


    //Search Params ဖတ်မယ်
    const searchParams = request.nextUrl.searchParams;
    const q = searchParams.get("q");
    console.log(q);  // /products?q=phone
    
    console.log(request.nextUrl)

    //Cookies ဖတ်မယ်
    const cookieStore = await cookies();
    cookieStore.set("token", "djfalsjflajl");
    const token = cookieStore.get("token");
    console.log(token);

    request.cookies.set("sessionId", "123456");
    console.log(request.cookies.get("sessionId"));


    //Headers ဖတ်မယ်
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders);
    const headerLists = await headers();
    console.log(headerLists.get("host"));


    
    return NextResponse.json({message:"ReqRes API data"});
    

}