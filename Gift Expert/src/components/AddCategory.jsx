import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    } // end onInputChange

    const onSubmit = ( event ) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue("");
    } // end onSubmit

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}