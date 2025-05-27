import gallerybg from "../../assets/img/bg/gallery-bg.png";
import gallery01 from "../../assets/img/gallery/gallery-01.jpg";
import gallery02 from "../../assets/img/gallery/gallery-02.jpg";
import gallery03 from "../../assets/img/gallery/gallery-03.jpg";
import gallery04 from "../../assets/img/gallery/gallery-04.jpg";
import gallery06 from "../../assets/img/gallery/thumb/06.jpg";
import gallery07 from "../../assets/img/gallery/thumb/07.jpg";
import gallery08 from "../../assets/img/gallery/thumb/08.jpg";
import gallery09 from "../../assets/img/gallery/thumb/09.jpg";
import gallery10 from "../../assets/img/gallery/thumb/10.jpg";

import sectionBg from "../../assets/img/bg/section-bg.jpg";
import ctabg from "../../assets/img/bg/cta-bg.jpg";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";
import NDSLogo from "../../Images/NDSLogo.png";
import Login from "../../Auth/Login";
import Dashboard from "../Dashboard";
import NavBar from "../NavBar";
const AllHome = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".bd-gallery-active", {
      modules: [Navigation],
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      speed: 800, // 👉 Transition speed in ms (smoothness)
      grabCursor: true, // 👉 Shows hand cursor for better UX
      autoplay: {
        delay: 3000, // 👉 Auto-slide every 3s
        disableOnInteraction: false,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
      },
    });

    return () => {
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <>
      {/* Preloader start */}
      <div className="preloader">
        <div className="loader rubix-cube">
          <div className="layer layer-1" />
          <div className="layer layer-2" />
          <div className="layer layer-3 color-1" />
          <div className="layer layer-4" />
          <div className="layer layer-5" />
          <div className="layer layer-6" />
          <div className="layer layer-7" />
          <div className="layer layer-8" />
        </div>
      </div>
      {/* Preloader end */}
      {/* Offcanvas area start */}
      <div className="fix">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo logo">
                  <a href="index.html">
                    <img src={NDSLogo} alt="logo" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fal fa-times" />
                  </button>
                </div>
              </div>
              <div className="offcanvas__search mb-25">
                <form action="#">
                  <input
                    type="text"
                    placeholder="What are you searching for?"
                  />
                  <button type="submit">
                    <i className="far fa-search" />
                  </button>
                </form>
              </div>
              <div className="mobile-menu fix mb-40" />
              <div className="sidebar__thumb d-none d-lg-block mb-20">
                <div className="row gx-2">
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/06.jpg"
                      >
                        <img src={gallery06} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/07.jpg"
                      >
                        <img src={gallery07} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/08.jpg"
                      >
                        <img src={gallery08} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/09.jpg"
                      >
                        <img src={gallery09} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/10.jpg"
                      >
                        <img src={gallery10} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/01.jpg"
                      >
                        <img src="assets/img/gallery/thumb/01.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offcanvas__contact mt-30 mb-20">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                      >
                        12/A, Mirnada City Tower, NYC
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+088889797697">+088889797697</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+012-345-6789">
                        <span className="mailto:support@mail.com">
                          support@mail.com
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="offcanvas__social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-overlay" />
      <div className="offcanvas-overlay-white" />
      {/* Offcanvas area start */}
      {/* Cartmini sidber start */}
      <div className="fix">
        <div className="shoping__sidebar">
          <div className="cartmini__wrapper">
            <div className="cartmini__title">
              <h4>Shopping Cart</h4>
            </div>
            <div className="cartmini__close">
              <button type="button">
                <i className="fal fa-times" />
              </button>
            </div>
            <div className="cartmini__widget">
              <div className="cartmini__inner">
                <ul>
                  <li>
                    <div className="cartmini__thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/img/product/quick-view/quick-view-01.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="cartmini__content">
                      <h5>
                        <a href="product-details.html">sweet milk Cream</a>
                      </h5>
                      <div className="product-quantity mt-10 mb-10">
                        <span className="cart-minus">-</span>
                        <input
                          className="cart-input"
                          type="text"
                          defaultValue={1}
                        />
                        <span className="cart-plus">+</span>
                      </div>
                      <div className="product__sm-price-wrapper">
                        <span className="product__sm-price">$46.00</span>
                      </div>
                    </div>
                    <a href="#" className="cartmini__del">
                      <i className="fal fa-times" />
                    </a>
                  </li>
                  <li>
                    <div className="cartmini__thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/img/product/quick-view/quick-view-02.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="cartmini__content">
                      <h5>
                        <a href="product-details.html">pure 1000ml milk</a>
                      </h5>
                      <div className="product-quantity mt-10 mb-10">
                        <span className="cart-minus">-</span>
                        <input
                          className="cart-input"
                          type="text"
                          defaultValue={1}
                        />
                        <span className="cart-plus">+</span>
                      </div>
                      <div className="product__sm-price-wrapper">
                        <span className="product__sm-price">$32.00</span>
                      </div>
                    </div>
                    <a href="#" className="cartmini__del">
                      <i className="fal fa-times" />
                    </a>
                  </li>
                  <li>
                    <div className="cartmini__thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/img/product/quick-view/quick-view-03.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="cartmini__content">
                      <h5>
                        <a href="product-details.html">mikado cheese bar</a>
                      </h5>
                      <div className="product-quantity mt-10 mb-10">
                        <span className="cart-minus">-</span>
                        <input
                          className="cart-input"
                          type="text"
                          defaultValue={1}
                        />
                        <span className="cart-plus">+</span>
                      </div>
                      <div className="product__sm-price-wrapper">
                        <span className="product__sm-price">$62.00</span>
                      </div>
                    </div>
                    <a href="product-details.html" className="cartmini__del">
                      <i className="fal fa-times" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="cartmini__checkout">
                <div className="cartmini__checkout-title mb-30">
                  <h4>Subtotal:</h4>
                  <span>$113.00</span>
                </div>
                <div className="cartmini__checkout-btn">
                  <a href="cart.html" className="bd-fill__btn w-100">
                    {" "}
                    <span /> view cart
                  </a>
                  <a href="checkout.html" className="bd-fill__btn-2 w-100">
                    {" "}
                    <span /> checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cartmini sidber end */}
      {/* Added to cart message  */}
      <div className="added-to-cart">
        <div className="added-to-cart-content d-flex align-items-center">
          <i className="fa-light fa-check" />
          <p>Successfully Added to cart</p>
          <span className="bd-action__item-number cart-count">0</span>
        </div>
      </div>
      {/* Added to wishlist message */}
      <div className="added-to-wishlist">
        <div className="added-to-cart-content d-flex align-items-center">
          <i className="fa-light fa-check" />
          <p>Successfully Added to wishlist</p>
          <span className="bd-action__item-number wishlist-count">0</span>
        </div>
      </div>
      {/* Add product modal area start */}
      <div className="product__modal modal fade" id="productmodal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="product__modal-wrapper p-relative">
              <div className="product__modal-close p-absolute">
                <button data-bs-dismiss="modal">
                  <i className="fal fa-times" />
                </button>
              </div>
              <div className="product__modal-inner">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="product__modal-box">
                      <div className="tab-content" id="modalTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav1"
                          role="tabpanel"
                          aria-labelledby="nav1-tab"
                        >
                          <div className="product__modal-img w-img">
                            <img
                              src="assets/img/product/quick-view/quick-view-01.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav2"
                          role="tabpanel"
                          aria-labelledby="nav2-tab"
                        >
                          <div className="product__modal-img w-img">
                            <img
                              src="assets/img/product/quick-view/quick-view-02.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav3"
                          role="tabpanel"
                          aria-labelledby="nav3-tab"
                        >
                          <div className="product__modal-img w-img">
                            <img
                              src="assets/img/product/quick-view/quick-view-03.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav4"
                          role="tabpanel"
                          aria-labelledby="nav4-tab"
                        >
                          <div className="product__modal-img w-img">
                            <img
                              src="assets/img/product/quick-view/quick-view-04.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs" id="modalTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="nav1-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav1"
                            type="button"
                            role="tab"
                            aria-controls="nav1"
                          >
                            <img
                              src="assets/img/product/quick-view/nav-01.png"
                              alt=""
                            />
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="nav2-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav2"
                            type="button"
                            role="tab"
                            aria-controls="nav2"
                            aria-selected="false"
                          >
                            <img
                              src="assets/img/product/quick-view/nav-02.png"
                              alt=""
                            />
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="nav3-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav3"
                            type="button"
                            role="tab"
                            aria-controls="nav3"
                            aria-selected="false"
                          >
                            <img
                              src="assets/img/product/quick-view/nav-03.png"
                              alt=""
                            />
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="nav4-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav4"
                            type="button"
                            role="tab"
                            aria-controls="nav4"
                            aria-selected="false"
                          >
                            <img
                              src="assets/img/product/quick-view/nav-04.png"
                              alt=""
                            />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="product__modal-content">
                      <h3 className="product__modal-title">
                        Dairy products are derived from milk
                      </h3>
                      <div className="product__details-price">
                        <span className="old-price">$90.35</span>
                        <span className="new-price">$70.25</span>
                      </div>
                      <div className="product__review">
                        <div className="product__details-rating">
                          <a href="#">
                            <i className="fa-solid fa-star" />
                          </a>
                          <a href="#">
                            <i className="fa-solid fa-star" />
                          </a>
                          <a href="#">
                            <i className="fa-solid fa-star" />
                          </a>
                          <a href="#">
                            <i className="fa-regular fa-star" />
                          </a>
                          <a href="#">
                            <i className="fa-regular fa-star" />
                          </a>
                        </div>
                        <div className="product__add-review">
                          <span>
                            <a href="#">1 Review</a>
                          </span>
                          <span>
                            <a href="#">Add Review</a>
                          </span>
                        </div>
                      </div>
                      <div className="product__stock mb-20">
                        <span>Availability :</span>
                        <span>In Stock</span>
                      </div>
                      <div className="product__details-action mb-20">
                        <div className="product__quantity">
                          <div className="product-quantity-wrapper">
                            <form action="#">
                              <button className="cart-minus">
                                <i className="fa-light fa-minus" />
                              </button>
                              <input
                                className="cart-input"
                                type="text"
                                defaultValue={1}
                              />
                              <button className="cart-plus">
                                <i className="fa-light fa-plus" />
                              </button>
                            </form>
                          </div>
                        </div>
                        <div className="product__add-cart">
                          <a
                            href="javascript:void(0)"
                            className="bd-fill__btn cart-btn"
                          >
                            <i className="fa-solid fa-basket-shopping" /> Add To
                            Cart
                          </a>
                        </div>
                        <div className="product__add-wish">
                          <a href="#" className="product__add-wish-btn">
                            <i className="fa-solid fa-heart" />
                          </a>
                        </div>
                      </div>
                      <div className="product__modal-links mb-20">
                        <ul>
                          <li>
                            <a href="#" title="Add to Wishlist">
                              <i className="fal fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Compare">
                              <i className="far fa-sliders-h" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Print">
                              <i className="fal fa-print" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Print">
                              <i className="fal fa-share-alt" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__safe-checkout">
                        <h5>Guaranteed Safe Checkout</h5>
                        <a href="#">
                          <img
                            src="assets/img/product/details/discover.png"
                            alt="payment image"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/product/details/mastercard.png"
                            alt="payment image"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/product/details/paypal.png"
                            alt="payment image"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/product/details/visa.png"
                            alt="payment image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add product modal area end */}
      {/* Header area start */}
      <NavBar />
      {/* Header area end */}
      {/* Body main wrapper start */}
      <main>
        {/* Hero area start */}
        <Dashboard />
        {/* Hero area start */}
        {/* Features area start */}
        <section
          className="bd-features__area"
          data-background="assets/img/bg/section-bg.jpg"
          style={{
            backgroundImage: `url(${sectionBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bd-features__wrapper">
            <div className="bd-features__top">
              <span>farming since 1956</span>
              <img
                className="bd-features__top-icon"
                src="assets/img/features/features-cow.png"
                alt="features-cow-icon"
              />
            </div>
            <div className="container">
              <div className="bd-features__item-wrapper pt-80 pb-10">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="bd-features__item text-center mb-60">
                      <div className="bd-features__icon">
                        <img
                          src="assets/img/features/features-icon-01.png"
                          alt="features-icon"
                        />
                      </div>
                      <div className="bd-features__content">
                        <h3>
                          <a href="about.html">Superior products</a>
                        </h3>
                        <p>
                          A content farm is a company that employs large
                          numbers.
                        </p>
                        <a className="bd-link__btn" href="about.html">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="bd-features__item text-center mb-60">
                      <div className="bd-features__icon">
                        <img
                          src="assets/img/features/features-icon-02.png"
                          alt="features-icon"
                        />
                      </div>
                      <div className="bd-features__content">
                        <h3>
                          <a href="about.html">fully pure &amp; fresh</a>
                        </h3>
                        <p>
                          A content farm is a company that employs large
                          numbers.
                        </p>
                        <a className="bd-link__btn" href="about.html">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="bd-features__item text-center mb-60">
                      <div className="bd-features__icon">
                        <img
                          src="assets/img/features/features-icon-03.png"
                          alt="features-icon"
                        />
                      </div>
                      <div className="bd-features__content">
                        <h3>
                          <a href="about.html">best quality providor</a>
                        </h3>
                        <p>
                          A content farm is a company that employs large
                          numbers.
                        </p>
                        <a className="bd-link__btn" href="about.html">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features area start */}
        {/* About area start */}
        <section
          className="bd-about__area pt-120 pb-120"
          data-background="assets/img/bg/section-bg.jpg"
          style={{
            backgroundImage: `url(${sectionBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="bd-about__image-wrapper p-relative mb-60">
                  <img
                    className="bd-about__image-1"
                    src="assets/img/about/about-img-01.jpg"
                    alt="about-img"
                  />
                  <div className="bd-about__image-2 text-sm-end">
                    <img
                      src="assets/img/about/about-img-02.jpg"
                      alt="about-img"
                    />
                  </div>
                  <div className="bd-about__shape">
                    <img
                      src="assets/img/about/about-cow.png"
                      alt="about-cow-icon"
                    />
                    <img
                      className="bd-about__dashed-icon"
                      src="assets/img/about/about-dashed.png"
                      alt="about-dashed"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bd-about__content-wrapper mb-60">
                  <div className="bd-section__title-wrapper mb-40">
                    <span className="bd-sub__title">About Us</span>
                    <h2 className="bd-section__title mb-30">
                      Know About Our Farm &amp; History
                    </h2>
                    <p className="bd-section__paragraph">
                      We have been working in this industry for more than 30
                      years with trust and honesty. All hands must be on deck if
                      we are to achieve our goal of improving global nutrition.
                    </p>
                  </div>
                  <div className="bd-about__features-wrapper mb-25">
                    <div className="bd-about__features">
                      <div className="bd-about__features-title">
                        <h4>Our Mission</h4>
                      </div>
                      <div className="bd-about__features-list">
                        <ul>
                          <li>
                            <div className="features__icon">
                              <i className="fa-regular fa-check" />
                            </div>
                            <div className="features__list-title">
                              High-quality work
                            </div>
                          </li>
                          <li>
                            <div className="features__icon">
                              <i className="fa-regular fa-check" />
                            </div>
                            <div className="features__list-title">
                              Straightforward pricing
                            </div>
                          </li>
                          <li>
                            <div className="features__icon">
                              <i className="fa-regular fa-check" />
                            </div>
                            <div className="features__list-title">
                              Rapid response times
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bd-about__experience text-center">
                      <span className="number counter">80</span>
                      <span className="plus">+</span>
                      <p>Years experience</p>
                    </div>
                  </div>
                  <a className="bd-theme__btn-1" href="about.html">
                    get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About area end */}
        {/* Product cta area start */}
        <section className="bd-product__cta-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="bd-product__cta-item mb-30">
                  <div className="bd-product__cta-inner">
                    <div className="bd-product__cta-icon">
                      <img
                        src="assets/img/product/product-icon-01.png"
                        alt="product-icon"
                      />
                    </div>
                    <div className="bd-product__cta-title">
                      <h3>
                        WE SALE BEST AGRICULTURE <br />
                        PRODUCTS
                      </h3>
                    </div>
                  </div>
                  <a
                    className="bd-product__cta-btn"
                    href="product-details.html"
                  >
                    <i className="fa-regular fa-arrow-right-long" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bd-product__cta-item mb-30">
                  <div className="bd-product__cta-inner">
                    <div className="bd-product__cta-icon">
                      <img
                        src="assets/img/product/product-icon-02.png"
                        alt="product-icon"
                      />
                    </div>
                    <div className="bd-product__cta-title">
                      <h3>
                        worldwide fresh mild <br />
                        delivery
                      </h3>
                    </div>
                  </div>
                  <a
                    className="bd-product__cta-btn"
                    href="product-details.html"
                  >
                    <i className="fa-regular fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Product cta area end */}
        {/* Service area start */}
        <section className="bd-service__area pt-30 pb-55">
          <div className="container">
            <div className="row">
              <div className="bd-section__title-wrapper text-center mb-50">
                <span className="bd-sub__title">Services</span>
                <h2 className="bd-section__title">what we provide</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="bd-service__item text-center mb-60">
                  <div className="bd-service__thumb">
                    <img
                      src="assets/img/service/1/service-01.png"
                      alt="service-thumb"
                    />
                    <div className="bd-service__number">
                      <span>01</span>
                    </div>
                    <div className="bd-service__arrow">
                      <a href="service-details.html">
                        <i className="fa-regular fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="bd-service__content">
                    <h3>
                      <a href="service-details.html">fresh milk</a>
                    </h3>
                    <p>
                      A content farm is a company that employs large numbers.
                    </p>
                  </div>
                  <a className="bd-link__btn" href="service-details.html">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="bd-service__item text-center mb-60">
                  <div className="bd-service__thumb">
                    <img
                      src="assets/img/service/1/service-02.png"
                      alt="service-thumb"
                    />
                    <div className="bd-service__number">
                      <span>02</span>
                    </div>
                    <div className="bd-service__arrow">
                      <a href="service-details.html">
                        <i className="fa-regular fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="bd-service__content">
                    <h3>
                      <a href="service-details.html">pure meat</a>
                    </h3>
                    <p>
                      A content farm is a company that employs large numbers.
                    </p>
                  </div>
                  <a className="bd-link__btn" href="service-details.html">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="bd-service__item text-center mb-60">
                  <div className="bd-service__thumb">
                    <img
                      src="assets/img/service/1/service-03.png"
                      alt="service-thumb"
                    />
                    <div className="bd-service__number">
                      <span>03</span>
                    </div>
                    <div className="bd-service__arrow">
                      <a href="service-details.html">
                        <i className="fa-regular fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="bd-service__content">
                    <h3>
                      <a href="service-details.html">organic product</a>
                    </h3>
                    <p>
                      A content farm is a company that employs large numbers.
                    </p>
                  </div>
                  <a className="bd-link__btn" href="service-details.html">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="bd-service__item text-center mb-60">
                  <div className="bd-service__thumb">
                    <img
                      src="assets/img/service/1/service-04.png"
                      alt="service-thumb"
                    />
                    <div className="bd-service__number">
                      <span>04</span>
                    </div>
                    <div className="bd-service__arrow">
                      <a href="service-details.html">
                        <i className="fa-regular fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="bd-service__content">
                    <h3>
                      <a href="service-details.html">dairy products</a>
                    </h3>
                    <p>
                      A content farm is a company that employs large numbers.
                    </p>
                  </div>
                  <a className="bd-link__btn" href="service-details.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service area end */}
        {/* Service cta area start */}
        <section className="bd-service__cta-area pb-95">
          <div className="container">
            <div className="bd-service__cta-border" />
            <div className="row">
              <div className="col-xl-9 col-lg-12">
                <div className="bd-service__cta-wrapper">
                  <div className="bd-service__cta-content">
                    <img src="assets/img/cta/cta-icon-01.png" alt="cta-icon" />
                    <h3>
                      WE’RE CARING ABOUT OUR <br />
                      farm GROWTH
                    </h3>
                  </div>
                  <div className="bd-service__cta-paragraph">
                    <p>
                      We have been working in this industry for more than 30
                      years with trust and honesty. All hands must be on deck if
                      we are to achieve
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 text-end mb-30">
                <div className="bd-service__cta-btn mt-5 text-xl-end text-start">
                  <a className="bd-theme__btn-1" href="about.html">
                    get a quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service cta area end */}
        {/* Gallery area start */}
        <section className="bd-gallery__area gallery__overlay fix pt-120 pb-120">
          <div className="bd-gallery__bg">
            <img src={gallerybg} alt="gallery-bg" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bd-gallery__inner p-relative">
                  <div className="bd-section__title-wrapper mb-45">
                    <span className="bd-sub__title">Farm Overview</span>
                    <h2 className="bd-section__title">farm gallary</h2>
                  </div>
                  {/* Navigation buttons */}
                  <div className="bd-gallery__navigatin">
                    <button className="gallery-button-prev">
                      <i className="far fa-long-arrow-left"></i>
                    </button>
                    <button className="gallery-button-next">
                      <i className="far fa-long-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="bd-gallery__wrapper">
                  <div className="bd-gallery-active swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="bd-gallery__item">
                          <div className="bd-gallery__image w-img">
                            <img src={gallery01} alt="gallery-image" />
                          </div>
                          <div className="bd-gallery__content">
                            <h3>
                              <a href="gallery.html">farm house look</a>
                            </h3>
                            <p>
                              A content farm is a company that employs large
                              numbers.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-gallery__item">
                          <div className="bd-gallery__image w-img">
                            <img src={gallery02} alt="gallery-image" />
                          </div>
                          <div className="bd-gallery__content">
                            <h3>
                              <a href="gallery.html">farm house look</a>
                            </h3>
                            <p>
                              A content farm is a company that employs large
                              numbers.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-gallery__item">
                          <div className="bd-gallery__image w-img">
                            <img src={gallery03} alt="gallery-image" />
                          </div>
                          <div className="bd-gallery__content">
                            <h3>
                              <a href="gallery.html">farm house look</a>
                            </h3>
                            <p>
                              A content farm is a company that employs large
                              numbers.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-gallery__item">
                          <div className="bd-gallery__image w-img">
                            <img src={gallery04} alt="gallery-image" />
                          </div>
                          <div className="bd-gallery__content">
                            <h3>
                              <a href="gallery.html">farm house look</a>
                            </h3>
                            <p>
                              A content farm is a company that employs large
                              numbers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery area end */}
        {/* Video area start */}
        <section className="bd-video__area pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="bd-video__wrapper text-center">
                  <div className="bd-video__btn d-flex justify-content-center mb-50">
                    <a
                      className="bd-play__btn  popup-video"
                      href="https://www.youtube.com/watch?v=awKCfkT96pg"
                    >
                      <i className="fa-solid fa-play" />
                    </a>
                  </div>
                  <div className="bd-section__title-wrapper mb-45">
                    <span className="bd-sub__title">Intro Video</span>
                    <h2 className="bd-section__title">
                      ready to experience &amp; <br />
                      work difference
                    </h2>
                  </div>
                  <div className="bd-video__btn-wrapper">
                    <a className="bd-theme__btn-2" href="contact.html">
                      make appointment
                    </a>
                    <a className="bd-theme__btn-1" href="contact.html">
                      get a quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Video area end */}
        {/* Brand area start */}
        <div className="bd-brand__area pb-120">
          <div className="container">
            <div className="bd-brand__dashed">
              <div className="bd-dashed__line" />
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-12">
                <div className="bd-brand-active swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="bd-single__brand">
                        <a href="#">
                          <img
                            src="assets/img/brand/brand-1.png"
                            alt="brand-img"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand">
                        <a href="#">
                          <img
                            src="assets/img/brand/brand-2.png"
                            alt="brand-img"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand">
                        <a href="#">
                          <img
                            src="assets/img/brand/brand-3.png"
                            alt="brand-img"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand">
                        <a href="#">
                          <img
                            src="assets/img/brand/brand-4.png"
                            alt="brand-img"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand">
                        <a href="#">
                          <img
                            src="assets/img/brand/brand-5.png"
                            alt="brand-img"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand">
                        <a href="#">
                          <img
                            src="assets/img/brand/brand-6.png"
                            alt="brand-img"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Brand area end */}
        {/* Cta area start */}
        <section
          className="bd-cta__area p-relative z-index-11 pt-120 pb-60"
          data-background="assets/img/bg/cta-bg.jpg"
          style={{
            backgroundImage: `url(${ctabg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bd-cta__shape">
            <img src="assets/img/cta/shap-01.png" alt="cta-shape" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="bd-section__title-wrapper mb-50">
                  <span className="bd-sub__title">Custom Request</span>
                  <h2 className="bd-section__title s-2">Book an appointment</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="bd-cta__left-wrapper mb-60">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="bd-cta__input-item mb-30">
                          <h5 className="bd-cta__input-title">full name</h5>
                          <div className="bd-cta__input">
                            <input
                              type="text"
                              placeholder="e.g. jhon william"
                            />
                            <i className="fa-solid fa-user" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="bd-cta__input-item mb-30">
                          <h5 className="bd-cta__input-title">email address</h5>
                          <div className="bd-cta__input">
                            <input type="text" placeholder="info@webmail.com" />
                            <i className="fa-solid fa-envelope-open" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="bd-cta__input-item mb-30">
                          <h5 className="bd-cta__input-title">phone number</h5>
                          <div className="bd-cta__input">
                            <input type="text" placeholder="000 111 222 55" />
                            <i className="fa-solid fa-phone" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="bd-cta__input-item mb-30">
                          <h5 className="bd-cta__input-title">
                            date &amp; time
                          </h5>
                          <div className="bd-cta__input">
                            <input type="date" />
                            <i className="fa-solid fa-calendar-days" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="bd-cta__btn mt-10">
                    <a className="bd-theme__btn-2" href="contact.html">
                      get appointment
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bd-contact__support mb-60">
                  <div className="bd-contact__action">
                    <div className="bd-contact__icon">
                      <img
                        src="assets/img/cta/phone-icon.png"
                        alt="phone-icon"
                      />
                    </div>
                    <div className="bd-contact__action-text">
                      <span>Or Call Us Now</span>
                      <h3>
                        <a href="tel:00211232000">00 211 232 000</a>
                      </h3>
                    </div>
                  </div>
                  <p className="bd-cta__paragraph">
                    Give us a call to ask for online advice or book a physical
                    schedule at dairypress soon.
                  </p>
                  <div className="bd-cta__map">
                    <div className="bd-cta__map-icon">
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    <div className="bd-cta__map-title">
                      <span>
                        <a
                          target="_blank"
                          href="https://www.google.com/maps/place/Dhaka/@23.7805733,90.2792399,11z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.810332!4d90.4125181?hl=en"
                        >
                          view on google map
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Cta area end */}
        {/* News area start */}
        <section className="bd-news__area pt-120 pb-60">
          <div className="container">
            <div className="row">
              <div className="bd-section__title-wrapper  text-center mb-50">
                <span className="bd-sub__title">News Feeds</span>
                <h2 className="bd-section__title">Farm blog &amp; insights</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="bd-news__item mb-60">
                  <div className="bd-news__thumb w-img">
                    <a href="news-details.html">
                      <img src="assets/img/news/news-01.jpg" alt="news-thumb" />
                    </a>
                  </div>
                  <div className="bd-news__content">
                    <div className="bd-news__meta">
                      <div className="bd-news__meta-item">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                          May 20, 2022
                        </span>
                      </div>
                      <div className="bd-news__meta-item">
                        <span>
                          <i className="fa-solid fa-user" />
                          David Askerph
                        </span>
                      </div>
                    </div>
                    <h3 className="bd-news__title">
                      <a href="news-details.html">
                        used to influence consumer behavior, but also used
                      </a>
                    </h3>
                    <a className="bd-link__btn" href="news-details.html">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="bd-news__item mb-60">
                  <div className="bd-news__thumb w-img">
                    <a href="news-details.html">
                      <img src="assets/img/news/news-02.jpg" alt="news-thumb" />
                    </a>
                  </div>
                  <div className="bd-news__content">
                    <div className="bd-news__meta">
                      <div className="bd-news__meta-item">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                          May 28, 2022
                        </span>
                      </div>
                      <div className="bd-news__meta-item">
                        <span>
                          <i className="fa-solid fa-user" />
                          Anzila Yatrian
                        </span>
                      </div>
                    </div>
                    <h3 className="bd-news__title">
                      <a href="news-details.html">
                        There are many commercial websites that
                      </a>
                    </h3>
                    <a className="bd-link__btn" href="news-details.html">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="bd-news__right mb-60">
                  <div className="bd-news__item">
                    <div className="bd-news__right-content">
                      <div className="bd-news__meta">
                        <div className="bd-news__meta-item">
                          <span>
                            <i className="fa-solid fa-calendar-days" />
                            Mar 28, 2022
                          </span>
                        </div>
                        <div className="bd-news__meta-item">
                          <span>
                            <i className="fa-solid fa-user" />
                            Kelian Anderson
                          </span>
                        </div>
                      </div>
                      <h3 className="bd-news__title">
                        {" "}
                        <a href="news-details.html">
                          called "content farms." Unless your project is a study
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="bd-news__item">
                    <div className="bd-news__right-content">
                      <div className="bd-news__meta">
                        <div className="bd-news__meta-item">
                          <span>
                            <i className="fa-solid fa-calendar-days" />
                            May 20, 2022
                          </span>
                        </div>
                        <div className="bd-news__meta-item">
                          <span>
                            <i className="fa-solid fa-user" />
                            Johnson Abert
                          </span>
                        </div>
                      </div>
                      <h3 className="bd-news__title">
                        {" "}
                        <a href="news-details.html">
                          of content farms, these are poor choices to support
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="bd-news__item">
                    <div className="bd-news__right-content">
                      <div className="bd-news__meta">
                        <div className="bd-news__meta-item">
                          <span>
                            <i className="fa-solid fa-calendar-days" />
                            Arp 10, 2022
                          </span>
                        </div>
                        <div className="bd-news__meta-item">
                          <span>
                            <i className="fa-solid fa-user" />
                            Peter Anderson
                          </span>
                        </div>
                      </div>
                      <h3 className="bd-news__title">
                        {" "}
                        <a href="news-details.html">
                          your work. They are created by companies that hire
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* News area end */}
      </main>
      {/* Body main wrapper end */}
      {/* Footer area start */}
      <footer>
        <section className="bd-footer__area green-bg foo p-relative pt-95">
          <div className="bd-footer__bg w-img">
            <img src="assets/img/bg/footer-bg.png" alt="footer-bg" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="bd-footer__widget footer-col-1 mb-60">
                  <div className="bd-footer__title">
                    <h4>about us</h4>
                  </div>
                  <div className="bd-footer__paragraph">
                    <p>
                      A farm is a plot of land that is used to grow crops and
                      raise livestock, as in our farm, we raise sheep and sell
                      their wool. The word farm is also used as a verb to mean
                      to work land.
                    </p>
                  </div>
                  <div className="bd-footer__social">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-behance-square" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="bd-footer__widget footer-col-2 mb-60">
                  <div className="bd-footer__title">
                    <h4>Services</h4>
                  </div>
                  <div className="bd-footer__link">
                    <ul>
                      <li>
                        <a href="#">Agriculture Foods</a>
                      </li>
                      <li>
                        <a href="#">Eggs &amp; Meets</a>
                      </li>
                      <li>
                        <a href="#">Organic Vegetables</a>
                      </li>
                      <li>
                        <a href="#">Fresh Milk</a>
                      </li>
                      <li>
                        <a href="#">Pond &amp; Sea Fish</a>
                      </li>
                      <li>
                        <a href="#">House Hold</a>
                      </li>
                      <li>
                        <a href="#">Cow Milk &amp; Meat</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Natural Wheats</a>
                      </li>
                      <li>
                        <a href="#">Organic Food</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="bd-footer__widget footer-col-3 mb-60">
                  <div className="bd-footer__title">
                    <h4>Business hours</h4>
                  </div>
                  <div className="bd-footer__contact">
                    <div className="bd-footer__contact-item">
                      <span>Mon - Fri</span>
                      <p className="mb-20">10:00 am to 06:00 pm</p>
                    </div>
                    <div className="bd-footer__contact-item">
                      <span>Saturday (1st &amp; 4th)</span>
                      <p className="mb-25">08:00 am to 04:00 pm</p>
                    </div>
                    <div className="bd-footer__support">
                      <div className="bd-footer__support-inner">
                        <div className="bd-footer__support-icon">
                          <img
                            src="assets/img/icon/footer-text.png"
                            alt="footer-text"
                          />
                        </div>
                        <div className="bd-footer__support-title">
                          <span>Emergency Service</span>
                          <a href="tel:00011122233">000 111 222 33</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-8 col-md-6">
                <div className="bd-footer__widget footer-col-4 mb-60">
                  <div className="bd-footer__title">
                    <h4>Subscribe us</h4>
                  </div>
                  <div className="bd-footer__subcribe">
                    <p>
                      Subscribe us &amp; recive our office &amp; update in your
                      inbox directly
                    </p>
                    <form action="#">
                      <div className="bd-footer__input p-relative mb-20">
                        <input type="text" placeholder="info@webmail.com" />
                        <i className="fa-solid fa-envelope-open" />
                      </div>
                      <button type="button" className="bd-theme__btn-3">
                        subscribe now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bd-copyright__area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="bd-copyright__main">
                    <div className="bd-copyright__border">
                      <div className="bd-copyright__text">
                        <p>
                          Copyright design by{" "}
                          <span>
                            <a
                              target="_blank"
                              href="https://themeforest.net/user/bdevs/portfolio"
                            >
                              @bdevs
                            </a>
                          </span>{" "}
                          - 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      {/* Footer area end */}
      {/* Back to top start */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <Login />
      {/* Back to top end */}
      {/* JS here */}
    </>
  );
};

export default AllHome;
