import { useSelector, useDispatch } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { selectTodos } from "../../redux/reducer";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const { filter } = useSelector((state) => state);
    return (
        <div
            className={`md:px-0 px-4 ${filter === "completed" ? "pt-5" : ""} `}
        >
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
            {filter === "completed" && todos.length > 0 ? (
                <div className="w-full flex">
                    <button
                        onClick={() => {
                            dispatch({
                                type: "todo/deleteCompleted",
                            });
                        }}
                        className="ml-auto mr-0 text-sm text-white bg-red-500 px-7 py-3 rounded-lg font-semibold"
                    >
                        <DeleteOutlineIcon className="max-h-4" />
                        delete all
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default TodoList;
