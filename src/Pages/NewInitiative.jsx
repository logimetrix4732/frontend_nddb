

import React from 'react'
import ImageHeader from '../Components/Shared/ImageHeader'

const NewInitiative = () => {
  return (
    <>
       <ImageHeader
        title="New Initiative"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "New Initiative" }]}
      />
      <h3 className='p-5'>New initiative content goes here !</h3>
    </>
  )
}

export default NewInitiative;
