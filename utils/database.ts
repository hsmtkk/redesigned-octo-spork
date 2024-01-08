import mongoose from "mongoose"

export const connectDB = async () => {
    const config = useRuntimeConfig()
    const url = `mongodb+srv://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@cluster0.8dm3jqk.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(url)
        console.log("success: connected to MongoDB")
    } catch (err) {
        console.log("failure: failed to connect to MongoDB")
        console.log(err)
        throw new Error()
    }
}