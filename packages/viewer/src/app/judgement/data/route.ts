import { NextResponse, type NextRequest } from "next/server";
import prisma from "@/lib/prisma";

const OSTRACA_PER_PAGE = parseInt(process.env.OSTRACA_PER_PAGE ?? "10", 10);

export async function GET(request: NextRequest) {
  const cursor = request.nextUrl.searchParams.get("cursor");
  const judgements = await prisma.judgement.findMany({
    select: { user: true, time: true, content: true },
    // TODO: Unique filter (userId & time)
    where: { time: { lt: cursor ? new Date(cursor) : undefined } },
    take: OSTRACA_PER_PAGE,
    orderBy: { time: "desc" },
  });
  return NextResponse.json({
    data: judgements,
    nextCursor: judgements[judgements.length - 1]?.time ?? null,
  });
}
