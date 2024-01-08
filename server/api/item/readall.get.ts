import { connectDB } from "@/utils/database"
import { ItemModel } from "@/utils/schemaModels"

export default defineEventHandler(async (event) => {
    console.log("readall")

    try {
        await connectDB()
        const allItems = await ItemModel.find()
        return { message: "アイテム読み取り成功", allItems }
    } catch (err) {
        console.log(err)
        throw createError({
            statusCode: 400,
            statusMessage: "アイテム読み取り失敗",
        })
    }
})