// import React from "react";

import Todo from "../models/todo";
import TodoDisplay from "./TodoDisplay";

// React.FC: Functional Component
const Todos: React.FC<{items: Todo[]}> = (props) => {
    return (
        <ul>
            {props.items.map((item) => <TodoDisplay item={item}></TodoDisplay>)}
        </ul>
    );
}

export default Todos;