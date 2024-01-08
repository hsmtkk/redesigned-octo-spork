import { connectDB } from "@/utils/database"
import { ItemModel } from "@/utils/schemaModels"

export default defineEventHandler(async (event) => {
    console.log("create")
    const body = await readBody(event)
    console.log("body")
    console.log(body)

    try {
        await connectDB()
        await ItemModel.create(body)
        return { message: "アイテム作成成功" }
    } catch (err) {
        console.log(err)
        throw createError({
            statusCode: 400,
            statusMessage: "アイテム作成失敗",
        })
    }
})