import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Link } from "react-router-dom";

const TodoList = () => {
    const { todos } = useSelector((state) => state.todo); 

    return (
        <div>
            <h1>The Perfect Todo List App</h1>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />  
            ))}
            <Link to="/create">To Create List</Link>
        </div>
    );
};

export default TodoList;
