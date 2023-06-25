import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "../../../../sanity/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/dist/client/components/headers";

export const POST = async (request: NextRequest) => {
  const req = await request.json();

  const uid = uuid(); //UUID will randomely generate string
  const setCookies = cookies();

  const user_id = cookies().get("user_id")?.value as string;

  if (!user_id) {
    setCookies.set("user_id", uid);
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: 1,
        user_id: user_id as string,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {}
};
