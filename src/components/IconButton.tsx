import React from 'react'

interface IIconButton {
    label: string
}

const CIconButton = ({label}: IIconButton) => {
  return (
    <button>{label}</button>
  )
}

export default CIconButton