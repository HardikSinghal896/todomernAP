import { useEffect, useLayoutEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import { Todo } from "./components/Todo";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3001/todos").then(async (res)=>{
      setTodos(res.data.todos);
      console.log(todos);
    })
  },[])
  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos}/>
      <Todo todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;