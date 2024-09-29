import mongoose from "mongoose";

mongoose.connect("mongodb+srv://hardiksinghal896:harsh@cluster0.eyxz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos",todoSchema);

export {todo};