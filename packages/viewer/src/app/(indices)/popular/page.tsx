import prisma from "@/lib/prisma";
import { selectDiscussion } from "@/lib/discussion";
import { NUM_DISCUSSIONS_TOP_CHARTS } from "../indices/constants";
import TopChart from "../indices/TopChart";

export const metadata = { title: "热门 - 洛谷帖子保存站" };

export const dynamic = "force-dynamic";

export default async function MostReplied() {
  return (
    <>
      <h3 className="pb-1 text-center mb-4s">最多回复</h3>
      <TopChart
        discussions={await prisma.discussion.findMany({
          select: selectDiscussion,
          where: { takedown: { is: null } },
          orderBy: { replyCount: "desc" },
          take: NUM_DISCUSSIONS_TOP_CHARTS,
        })}
      />
    </>
  );
}
