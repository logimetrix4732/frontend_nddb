import ImageHeader from "../Components/Shared/ImageHeader"


const MilkProducerOrg = () => {
  return (
    <>
       <ImageHeader
        title="Milk Producer Organisations"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Milk Producer Organisations" }]}
      />
      <h3 className="p-5">Milk Producer org content goes here </h3>
    </>
  )
}

export default MilkProducerOrg
