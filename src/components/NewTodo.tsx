// import React from "react";
import { useRef } from "react";

const NewTodo: React.FC<{onAddTodo: (arg0: string) => void}> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // !: The todoTextInputRef is NEVER 'null'.
        const enteredText = todoTextInputRef.current!.value;


        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        props.onAddTodo(enteredText);
    };
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button> Add Todo</button>
        </form>
    );
}

export default NewTodo;
