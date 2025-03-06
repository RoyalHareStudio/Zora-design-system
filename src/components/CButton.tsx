import React from 'react'

export interface CButtonInterface{
    buttonText: string,
    onClick?: VoidFunction,
}

const CButton = ({buttonText, onClick = () => {}}: CButtonInterface) => {
    return (
        <button onClick={onClick}>{buttonText}</button>
    )
}

export default CButton