import React, { useState } from "react";

import { AddCategory, GifGrid } from "./components/index.js";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    } // end onAddCategory

    return (
        <>
            <h1>Gif Expert</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            {
                categories.map( (category) => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
} // end GifExpertApp