import React from 'react'
import WSection from '../../src/wrapper/WSection';

const SectionTest = () => {
  return (
    <WSection
        sectionLabelledById='sectionHeader'
        children={
        <div>
            <h3 id='sectionHeader'>Section Header</h3>
            <span>Section Body</span>
            <span>Second Section Body</span>
        </div>
        }
    / >
  )
}

export default SectionTest