import { connectDB } from "@/utils/database"
import { UserModel } from "@/utils/schemaModels"

export default defineEventHandler(async (event) => {
    console.log("register")
    const body = await readBody(event)
    console.log("body")
    console.log(body)

    try {
        await connectDB()
        await UserModel.create(body)
        return { message: "ユーザー登録成功" }
    } catch (err) {
        console.log(err)
        throw createError({
            statusCode: 400,
            statusMessage: "ユーザー登録失敗",
        })
    }
})