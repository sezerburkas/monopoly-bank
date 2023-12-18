import { PrismaClient } from "@prisma/client"
import sendMoney from "@/app/helpers/sendMoney";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const formData = await req.formData()

    const fromUsername = String(formData.get('from-username'))
    const targetUsername = String(formData.get('target-username'))
    const amount = formData.get('amount')
    
    const response = await sendMoney(fromUsername, targetUsername, amount, "Send Money")

    return Response.json({response})
}