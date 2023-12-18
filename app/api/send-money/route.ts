import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const formData = await req.formData()

    const fromUsername = String(formData.get('from-username'))
    const targetUsername = String(formData.get('target-username'))
    const amount = formData.get('amount')

    let fromUser = "";
    let targetUser = "";

    if(fromUsername){
        fromUser = await prisma.user.findUnique({where: {username: fromUsername}});

        const updateFromUser = await prisma.user.update({
            where: {
              username: fromUsername,
            },
            data: {
              balance: parseInt(fromUser.balance-amount),
            },
          })
    }

    if(targetUsername){
        targetUser = await prisma.user.findUnique({where: {username: targetUsername}});

        const updateTargetUser = await prisma.user.update({
            where: {
              username: targetUsername,
            },
            data: {
              balance: parseInt(parseInt(targetUser.balance)+parseInt(amount)),
            },
          })
    }

    const addTransaction = await prisma.transactions.create({
        data: {
            action:"Send Money",
            fromUsername: fromUsername,
            targetUsername: targetUsername,
            amount: parseInt(amount)
        },
    })

    return Response.json({fromUser, targetUser})
}