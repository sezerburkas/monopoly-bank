import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const formData = await req.formData()

    const username = String(formData.get('username'))
    let users = null;

    if(username){
        users = await prisma.user.findMany();
    }

    return Response.json(users)
}