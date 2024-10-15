import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/todo/todo.actions";

const TodoItem = ({ todo }) => { 
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));  
    };

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));  
    };

    return (
        <div>
            <input
                id={todo.id}
                type="checkbox"
                checked={todo.completed} 
                onChange={handleToggle}  
            />
            <label htmlFor={todo.id}>{todo.text}</label> 
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TodoItem;
