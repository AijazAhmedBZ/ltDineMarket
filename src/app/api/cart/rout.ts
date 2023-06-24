import { NextRequest, NextResponse } from "next/server"
import { db, carTable } from "../../../../sanity/lib/drizzle"
export const GET =async (request:Request) => {
    try {
        const res = await db.select().from(carTable)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message:"Somthing went wrong"})
    }
}

export const POST =async (request:Request) => {

const req = await request.json()

    try {
        const res = await db.insert(carTable).values({
            product_id: req.product_id,
            quantity:1,
            user_id:""

        })
        return NextResponse.json({ res})
    } catch (error) {
        
    }
}