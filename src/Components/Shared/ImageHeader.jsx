import bgImg from "../../assets/img/hero/breadcrumb.jpg";

const ImageHeader = ({ title, breadcrumb = [] }) => {
  return (
    <div
      className="bd-breadcrumb__area include__bg hero__overlay Breadcrumb__height d-flex align-items-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container fluid">
        <div className="row">
          <div className="col-xl-12">
            {/* Breadcrumb Navigation */}
            <div className="bd-breadcrumb__menu">
              <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                <ul className="trail-items">
                  {breadcrumb.map((item, index) => (
                    <li
                      key={index}
                      className={`trail-item ${
                        index === 0 ? "trail-begin" : index === breadcrumb.length - 1 ? "trail-end" : ""
                      }`}
                    >
                      <span>
                        {item.href ? (
                          <a href={item.href}>{item.label}</a>
                        ) : (
                          item.label
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Page Title */}
            <div className="bd-breadcrumb__title">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHeader;
