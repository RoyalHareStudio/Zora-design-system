//Section Wrapper 

import React, { ReactNode } from 'react'

interface WSectionInterface {
    sectionLabelledBy: string,
    children: ReactNode,
}

const WSection = ({ sectionLabelledBy, children }: WSectionInterface) => {
    return (
        <section aria-labelledBy={sectionLabelledBy}>{children}</section>
    )
}

export default WSection