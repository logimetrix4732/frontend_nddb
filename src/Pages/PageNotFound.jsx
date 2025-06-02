import { Link } from "react-router-dom";
import notfound from "../assets/img/bg/error-thumb.png";

const PageNotFound = () => {
  return (
    <>
      <div className="bd-error__area pt-120 pb-120 bg-light">
        <div className="container small-container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="error__wrapper text-center">
                <div className="bd-error__thumb m-img">
                  <img src={notfound} alt="not found" />
                </div>
                <div className="bd-error__content text">
                  <h3>Oops! That page can't be found.</h3>
                  <p>
                    {/* We couldn't find any results for your search. Use more
                    generic words or double check your spelling. */}
                    The page you’re looking for may have been moved, deleted, or is currently under development. Please check back later or return to the homepage.
                  </p>
                  <Link to="/" className="btn bd-fill__btn-2">
                    {/* <Link to={-1} className="btn bd-fill__btn-2"> */}
                    BACK TO HOMEPAGE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
