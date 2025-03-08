import React from 'react'

export interface CButtonInterface{
    buttonText: string,
    isPrimary?: boolean,
    backgroundColor?: string,
    onClick?: VoidFunction,
}

const CButton = ({buttonText, isPrimary = false, onClick = () => {}, backgroundColor}: CButtonInterface) => {
    return (
        <button 
            onClick={onClick}
            style={{ backgroundColor }}>
                {buttonText}
        </button>
    )
}

export default CButton