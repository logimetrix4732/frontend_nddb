
import ImageHeader from "../Components/Shared/ImageHeader";

const Publications = () => {
  return (
    <>
      <ImageHeader
        title="Publications"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Publications" }]}
      />
      <h3 className='p-5'>Publications content goes here !</h3>
    </>
  );
};

export default Publications;
