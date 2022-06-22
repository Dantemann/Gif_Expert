import React from "react";

import { GifGridItem, IsLoading } from "./index";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <IsLoading isLoading={isLoading} title={category} />
            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}