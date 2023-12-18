import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const formData = await req.formData();

  const username = String(formData.get("username"));
  let table = null;

  if (username) {
    table = await prisma.transactions.findMany({
      where: { OR: [{ fromUsername: username }, { targetUsername: username }] },
      orderBy: { date: "desc"}
    });
  }

  return Response.json(table);
}
