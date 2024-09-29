import { useState } from "react";
import axios from 'axios';

function CreateTodo({ todos, setTodos }) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    return <>
        <div>
            <input type="text" placeholder="title" onChange={async (e) => {
                setTitle(e.target.value)
                console.log(title);
            }} />
            <input type="text" placeholder="description" onChange={(e) => {
                console.log(e.target.value);
                setDescription(e.target.value);
            }} />
            <button onClick={() => {
                axios.post("http://localhost:3001/todo", {
                    title: title,
                    description: description,
                    completed: false
                }).then((res) => {
                    setTodos([...todos, {
                        title: title,
                        description: description,
                        completed: false
                    }])
                    alert("Todo created");
                })
            }}>Add a todo</button>
        </div>
    </>
}
export default CreateTodo;