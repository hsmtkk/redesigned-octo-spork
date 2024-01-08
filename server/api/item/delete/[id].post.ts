import { connectDB } from "@/utils/database"
import { ItemModel } from "@/utils/schemaModels"

export default defineEventHandler(async (event) => {
    console.log("delete")
    const id = event.context.params.id
    console.log("id")
    console.log(id)

    try {
        await connectDB()
        await ItemModel.deleteOne({ _id: id })
        return { message: "アイテム削除成功" }
    } catch (err) {
        console.log(err)
        throw createError({
            statusCode: 400,
            statusMessage: "アイテム削除失敗",
        })
    }
})