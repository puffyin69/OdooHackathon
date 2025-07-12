import { NextResponse } from 'next/server';
export function GET(request){
    return NextResponse.json({
        "message":"Login api is working",
        
    },{status:201});
}