import axios from "axios";

export function Todo({ todos, setTodos }) {
    console.log(todos, "todos in component");
    return <>
        <div>
            {todos.map((value, index) => {
                return <div>
                    <h1>{value.title}</h1>
                    <p>{value.description}</p>
                    <button id={value._id} onClick={() => {
                        axios.put("http://localhost:3001/completed", {
                            id: value._id
                        }).then((res) => {
                            axios.get("http://localhost:3001/todos").then(async (res) => {
                                setTodos(res.data.todos);
                                console.log(todos);
                            })
                        })
                    }}>{value.completed == true ? "Completed" : "Mark as completed"}</button>
                </div>
            })}
        </div>
    </>
}