import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo/todo.actions";
import { Link } from "react-router-dom";

const CreateTodo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            dispatch(addTodo(value)); 
            setValue(""); 
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}  
            />
            <button type="submit">Submit</button>
            <Link to="/">To List</Link>
        </form>
    );
};

export default CreateTodo;
