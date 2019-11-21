import React from "react";
import { ToDo } from "./ToDo";

export const List = props => {

    
    return <div>{props.todos.map((todo, index) => {
        // return <li key=index>{todo}</li>
        return <ToDo key={index} todo={todo} toggleCompleted={props.toggleCompleted} />;
    })}</div>;
}