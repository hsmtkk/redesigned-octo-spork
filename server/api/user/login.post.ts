import { connectDB } from "@/utils/database"
import { UserModel } from "@/utils/schemaModels"

export default defineEventHandler(async (event) => {
    console.log("login")
    const body = await readBody(event)
    console.log("body")
    console.log(body)

    try {
        await connectDB()
        const savedUserData = await UserModel.findOne({ email: body.email })
        if (savedUserData) {
            if (body.password === savedUserData.password) {
                return { message: "ログイン成功" }
            }
            else {
                return { message: "ログイン失敗: パスワード誤り" }
            }
        }
        else {
            return { message: "ログイン失敗: ユーザーなし" }
        }
    } catch (err) {
        console.log(err)
        throw createError({
            statusCode: 400,
            statusMessage: "ログイン失敗",
        })
    }
})