import React from "react";

// React.FC: Functional Component
const Todos: React.FC<{
    [x:string]:React.ReactNode ; items: string[]
}> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

export default Todos;