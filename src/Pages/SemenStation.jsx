

import React from 'react'
import ImageHeader from '../Components/Shared/ImageHeader'

const SemenStation = () => {
  return (
    <>
       <ImageHeader
        title="Semen Station"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Semen Station" }]}
      />
      <h3 className="p-5">Semen Station content goes here</h3>
    </>
  )
}

export default SemenStation;

