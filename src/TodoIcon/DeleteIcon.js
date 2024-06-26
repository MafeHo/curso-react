import React from "react";
import {TodoIcon} from "./TodoIcon/TodoIcon";

function DeleteIcon() {
    return (
        <TodoIcon
            type="delete"
            color="red"
        />
    );
}

export { DeleteIcon };