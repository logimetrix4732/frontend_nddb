import React from "react";
import ImageHeader from "../Components/Shared/ImageHeader";

const OurExperties = () => {
  return (
    <>
      <ImageHeader
        title="our experties"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Experties" }]}
      />
      <h3 className="p-5">Our Experties section goes here</h3>
    </>
  );
};

export default OurExperties;
