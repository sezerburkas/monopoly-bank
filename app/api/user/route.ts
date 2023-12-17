import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const formData = await req.formData()

    const username = String(formData.get('username'))
    let user = null;

    if(username){
        user = await prisma.user.findUnique({where: {username: username}});
    }

    return Response.json(user)
}