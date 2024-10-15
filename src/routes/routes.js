import CreateTodo from "../pages/CreateTodo";
import TodoList from "../pages/TodoList";

const routes = [
    {
        element: <CreateTodo />,
        path: "/create"
    },
    {
        element: <TodoList />,
        path: "/"
    }
];

export default routes;
