import express from 'express';
import { createdTodo, updateTodo } from './types.js';
import cors from 'cors'
import { todo } from './db.js';

const app = express();
app.use(express.json());
app.use(cors())

app.get("/todos",async(req,res)=>{
    const todos =await todo.find({});
    res.json({
        todos
    })
})
app.post("/todo",async (req,res)=>{
    const createPayload = req.body;
    console.log(createPayload);
    const parsedPayload = createdTodo.safeParse(createPayload);
    console.log("todo add called");
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    console.log("added successfully")
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    // put it in mongodb
    res.json({
        msg: "Todo created"
    })
})

app.put("/completed",async(req,res)=>{
    const upatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(upatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    console.log(req.body.id)
    const data = await todo.find({_id:req.body.id});
    if(data[0].completed)
    data[0].completed = false;
    else
    data[0].completed = true;
    console.log(data[0]);
    await data[0].save();
    res.json({
        data
    })
})

app.listen(3001,()=>{
    console.log("Server started");
})