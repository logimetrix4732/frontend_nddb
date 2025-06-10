import React from "react";
import ImageHeader from "../Components/Shared/ImageHeader";

const Tenders = () => {
  return (
    <>
      <ImageHeader
        title="Tenders"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Tenders" }]}
      />
      <h3 className="p-5">Tenders content goes here !</h3>
    </>
  );
};

export default Tenders;
