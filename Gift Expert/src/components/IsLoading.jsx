import React from 'react'

export const IsLoading = ({isLoading, title}) => {
    return (
        <>
            { isLoading && <h3>Cargando...</h3>}
            { !isLoading && <h3>{title}</h3>}
        </>
    )
}
