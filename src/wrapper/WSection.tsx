//Section Wrapper 

import React, { ReactNode } from 'react'

export interface WSectionInterface {
    sectionLabelledById: string,
    children: ReactNode,
}

const WSection = ({ sectionLabelledById, children }: WSectionInterface) => {
    return (
        <section aria-labelledBy={sectionLabelledById}>{children}</section>
    )
}

export default WSection