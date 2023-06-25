import { cookies } from "next/dist/client/components/headers";
import { db, cartTable } from "../../../sanity/lib/drizzle";
import { NextResponse, NextRequest } from "next/server";
import { eq } from "drizzle-orm";

cookies().get("user_id")?.value;

fetch(
  'http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}'
);

export const GET = async (request: NextRequest) => {
  const req = request.nextUrl;
  const uid = req.searchParams.get("user_id") as string;

  try {
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, uid));
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Somthing went wrong" });
  }
};
