//Section Wrapper 

import React from 'react'

interface WSectionInterface {
    sectionLabelledBy: string,
}

const WSection = ({ sectionLabelledBy }: WSectionInterface) => {
    return (
        <section aria-labelledBy={sectionLabelledBy}>WSection</section>
    )
}

export default WSection