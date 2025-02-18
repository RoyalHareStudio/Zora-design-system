import React from 'react'

interface IButton {
    label: string,
    onClick: VoidFunction,
};

const CButton = ({ label, onClick }: IButton) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default CButton