// import React from "react";
import Todo from "../models/todo";

const TodoDisplay: React.FC<{item: Todo}> = (props) => {
    return <li key={props.item.id}>{props.item.text}</li>;
}

export default TodoDisplay; 