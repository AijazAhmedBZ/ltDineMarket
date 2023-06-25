import { NextRequest, NextResponse } from "next/server";
import { db, carTable } from "../../../../sanity/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/dist/client/components/headers";

const uid = uuid();
const setCookies = cookies();

if (!cookies().has("user_id")) {
  setCookies.set("user_id", uid);
}
export const GET = async (request: Request) => {
  try {
    const res = await db.select().from(carTable);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Somthing went wrong" });
  }
};

export const POST = async (request: Request) => {
  const req = await request.json();

  try {
    const res = await db.insert(carTable).values({
      product_id: req.product_id,
      quantity: 1,
      user_id: cookies().get("user_id")?.value as string,
    }).returning;
    return NextResponse.json({ res });
  } catch (error) {}
};
