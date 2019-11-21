import React from 'react';

export const ToDo = props => {
    console.log(props);
    return (
        <div>
            {/* {props.completed ? <li id={props.id} style={{textDecoration: "line-through"}}>{props.todo}</li> : <li id={props.id}>{props.todo}</li>} */}
            <li onClick={() => props.toggleCompleted(props.todo.id)} id={props.todo.id} style={{textDecoration: props.todo.completed ? "line-through" : "none"}}>{props.todo.todo}</li>
        </div>
    )
}