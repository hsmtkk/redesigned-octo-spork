import { connectDB } from "@/utils/database"
import { ItemModel } from "@/utils/schemaModels"

export default defineEventHandler(async (event) => {
    console.log("readall")
    const id = event.context.params.id
    console.log("id")
    console.log(id)

    try {
        await connectDB()
        const singleItem = await ItemModel.findById(id)
        return { message: "アイテム読み取り成功", singleItem }
    } catch (err) {
        console.log(err)
        throw createError({
            statusCode: 400,
            statusMessage: "アイテム読み取り失敗",
        })
    }
})