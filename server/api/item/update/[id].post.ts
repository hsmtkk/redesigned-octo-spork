import { connectDB } from "@/utils/database"
import { ItemModel } from "@/utils/schemaModels"

export default defineEventHandler(async (event) => {
    console.log("update")
    const body = await readBody(event)
    console.log("body")
    console.log(body)
    const id = event.context.params.id
    console.log("id")
    console.log(id)

    try {
        await connectDB()
        await ItemModel.updateOne({ _id: id }, body)
        return { message: "アイテム編集成功" }
    } catch (err) {
        console.log(err)
        throw createError({
            statusCode: 400,
            statusMessage: "アイテム編集失敗",
        })
    }
})