import React from "react";

const AllHome1 = () => {
  return (
    <>
      {/*[if lte IE 9]>
   <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
   <![endif]*/}
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
                    <img src="assets/img/logo/logo-2.png" alt="logo" />
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
                        <img src="assets/img/gallery/thumb/06.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/07.jpg"
                      >
                        <img src="assets/img/gallery/thumb/07.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/08.jpg"
                      >
                        <img src="assets/img/gallery/thumb/08.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/09.jpg"
                      >
                        <img src="assets/img/gallery/thumb/09.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/10.jpg"
                      >
                        <img src="assets/img/gallery/thumb/10.jpg" alt="" />
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
      <header>
        <div
          id="header-sticky"
          className="bd-header__area-2 herder-transparent"
        >
          <div className="container">
            <div className="bd-header__main pt-30">
              <div className="row align-items-center">
                <div className="col-xxl-5 col-xl-6 col-lg-8 d-none d-md-block">
                  <div className="bd-header__menu-wrapper d-flex align-items-center">
                    <div className="main-menu main-menu-2 d-none d-none d-lg-block">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="has-dropdown">
                            <a href="index.html">Home</a>
                            <ul className="submenu">
                              <li>
                                <a href="index.html">Home Style 1</a>
                              </li>
                              <li>
                                <a href="index-2.html">Home Style 2</a>
                              </li>
                              <li>
                                <a href="index-3.html">Home Style 3</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li className="has-dropdown">
                            <a href="#">Pages</a>
                            <ul className="submenu">
                              <li>
                                <a href="team.html">Team</a>
                              </li>
                              <li>
                                <a href="team-details.html">Team Details</a>
                              </li>
                              <li>
                                <a href="gallery.html">Gallery</a>
                              </li>
                              <li>
                                <a href="faq.html">Faq</a>
                              </li>
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="product-details.html">
                                  Product Details
                                </a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="login.html">Login</a>
                              </li>
                              <li>
                                <a href="register.html">Register</a>
                              </li>
                              <li>
                                <a href="error.html">404 Page</a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="service.html">Service</a>
                            <ul className="submenu">
                              <li>
                                <a href="service.html">Service</a>
                              </li>
                              <li>
                                <a href="service-details.html">
                                  Service details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="news.html">News</a>
                            <ul className="submenu">
                              <li>
                                <a href="news.html">News</a>
                              </li>
                              <li>
                                <a href="news-details.html">News Details</a>
                              </li>
                              <li>
                                <a href="news-layout-1.html">Grid Layout 1</a>
                              </li>
                              <li>
                                <a href="news-layout-2.html">Grid Layout 2</a>
                              </li>
                              <li>
                                <a href="news-layout-3.html">Grid Layout 3</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-6 d-lg-none d-xl-block">
                  <div className="bd-header__logo-2 text-center">
                    <a href="index.html">
                      <img src="assets/img/logo/logo-2.png" alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-4 col-lg-4 col-6">
                  <div className="bd-header__right right-2 d-flex align-items-center justify-content-end">
                    <div className="bd-header__action mr-10">
                      <div className="bd-header__action-icon">
                        <button className="shoping__toggle">
                          <img
                            src="assets/img/icon/cart-icon.png"
                            alt="cart-icon"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="bd-header__hamburger">
                      <div className="bd-header__hamburger-icon">
                        <button className="side-toggle">
                          <img
                            src="assets/img/icon/hamburger-icon.png"
                            alt="hamburger-icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header area end */}
      {/* Body main wrapper start */}
      <main>
        {/* Hero area start */}
        <section className="bd-hero__area">
          <div className="bd-singel__hero">
            <div
              className="bd-hero__banner-2 include__bg-2 hero-height-2 p-relative"
              data-background="assets/img/hero/hero-2.jpg"
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="bd-hero__content-2 text-center">
                      <span className="animated fadeInUp">
                        Welcome to our dairy farm
                      </span>
                      <h2 className="animated fadeInUp">dairypress</h2>
                      <div className="bd-hero__btn-wrapper justify-content-center animated fadeInDown">
                        <a className="bd-hero__btn-3" href="shop.html">
                          Our Products
                        </a>
                        <a className="bd-hero__btn-4" href="about.html">
                          about us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero area start */}
        {/* About area start */}
        <section className="bd-about__area-2 pt-120 pb-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="bd-about__content-box mb-60">
                  <div className="bd-section__title-wrapper mb-25">
                    <span className="bd-sub__title">About Us</span>
                    <h2 className="bd-section__title s-2 mb-30">
                      Know About Our Farm &amp; History
                    </h2>
                    <p className="bd-section__paragraph">
                      We have been working in this industry for more than 30
                      years with trust and honesty. All hands must be on deck if
                      we are to achieve our goal of improving global nutrition.
                    </p>
                  </div>
                  <div className="bd-about__award mb-40">
                    <div className="bd-about__award__icon">
                      <img
                        src="assets/img/about/award-icon.png"
                        alt="award-icon"
                      />
                    </div>
                    <div className="bd-about__award-content-2">
                      <h3>Yound Farm Award 2022</h3>
                      <a className="bd-link__btn" href="service-details.html">
                        Service Details
                      </a>
                    </div>
                  </div>
                  <a className="bd-theme__btn-4" href="about.html">
                    read more
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bd-about__image-wrapper-2 p-relative mb-60">
                  <img
                    className="bd-about__image-3"
                    src="assets/img/about/about-img-03.jpg"
                    alt="about-img"
                  />
                  <img
                    className="bd-about__image-4"
                    src="assets/img/about/about-img-04.jpg"
                    alt="about-img"
                  />
                  <div className="bd-about__shape-2">
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
                  <div className="bd-about__cercle" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About area end */}
        {/* Service area start */}
        <section
          className="bd-serrvice__area service__bg pt-120 pb-60"
          data-background="assets/img/bg/service-bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bd-section__title-wrapper text-center mb-50">
                  <span className="bd-sub__title">Services</span>
                  <h2 className="bd-section__title">what we provide</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-service__item-2 mb-60">
                  <div className="bd-service__thumb-2 w-img">
                    <a href="service-details.html">
                      <img
                        src="assets/img/service/service-01.jpg"
                        alt="service-thumb"
                      />
                    </a>
                  </div>
                  <div className="bd-service__content-2 transition-3">
                    <h3>
                      <a href="service-detasils.html">fresh milk &amp; meat</a>
                    </h3>
                    <a className="bd-link__btn-2" href="service-details.html">
                      Service Details
                    </a>
                    <div className="bd-service__icon">
                      <span>
                        <img
                          src="assets/img/service/icon/1.png"
                          alt="service-icon"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="bd-service__hover transition-3">
                    <div className="bd-service__overlay">
                      <div className="bd-service__icon">
                        <span>
                          <img
                            src="assets/img/service/icon/1.png"
                            alt="service-icon"
                          />
                        </span>
                      </div>
                      <span className="bd-service__stroke-text">01</span>
                      <h3>
                        <a href="service-details.html">fresh milk &amp; meat</a>
                      </h3>
                      <p>
                        A content farm is a company that employs to large
                        numbers quality.
                      </p>
                      <a className="bd-link__btn-2" href="service-details.html">
                        Service Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-service__item-2 mb-60">
                  <div className="bd-service__thumb-2 w-img">
                    <a href="service-details.html">
                      <img
                        src="assets/img/service/service-02.jpg"
                        alt="service-thumb"
                      />
                    </a>
                  </div>
                  <div className="bd-service__content-2 transition-3">
                    <h3>
                      <a href="service-detasils.html">dairy products</a>
                    </h3>
                    <a className="bd-link__btn-2" href="service-details.html">
                      Service Details
                    </a>
                    <div className="bd-service__icon">
                      <span>
                        <img
                          src="assets/img/service/icon/2.png"
                          alt="service-icon"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="bd-service__hover transition-3">
                    <div className="bd-service__overlay">
                      <div className="bd-service__icon">
                        <span>
                          <img
                            src="assets/img/service/icon/2.png"
                            alt="service-icon"
                          />
                        </span>
                      </div>
                      <span className="bd-service__stroke-text">02</span>
                      <h3>
                        <a href="service-details.html">dairy products</a>
                      </h3>
                      <p>
                        A content farm is a company that employs to large
                        numbers quality.
                      </p>
                      <a className="bd-link__btn-2" href="service-details.html">
                        Service Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-service__item-2 mb-60">
                  <div className="bd-service__thumb-2 w-img">
                    <a href="service-details.html">
                      <img
                        src="assets/img/service/service-03.jpg"
                        alt="service-thumb"
                      />
                    </a>
                  </div>
                  <div className="bd-service__content-2 transition-3">
                    <h3>
                      <a href="service-detasils.html">organic product</a>
                    </h3>
                    <a className="bd-link__btn-2" href="service-details.html">
                      Service Details
                    </a>
                    <div className="bd-service__icon">
                      <span>
                        <img
                          src="assets/img/service/icon/3.png"
                          alt="service-icon"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="bd-service__hover transition-3">
                    <div className="bd-service__overlay">
                      <div className="bd-service__icon">
                        <span>
                          <img
                            src="assets/img/service/icon/3.png"
                            alt="service-icon"
                          />
                        </span>
                      </div>
                      <span className="bd-service__stroke-text">03</span>
                      <h3>
                        <a href="service-details.html">organic product</a>
                      </h3>
                      <p>
                        A content farm is a company that employs to large
                        numbers quality.
                      </p>
                      <a className="bd-link__btn-2" href="service-details.html">
                        Service Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service area end */}
        {/* Counter area start */}
        <div className="bd-counter__area pb-85">
          <div className="container">
            <div className="bd-counter__border" />
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="bd-counter__item p-relative mb-30">
                  <div className="bd-counter__inner">
                    <div className="bd-counter__content">
                      <span className="bd-counter__title">Projects done</span>
                      <div className="bd-counter__number">
                        <span className="counter">2600</span>
                        <span>+</span>
                      </div>
                    </div>
                    <div className="bd-counter__icon">
                      <img
                        src="assets/img/counter/counter-01.png"
                        alt="counter-icon"
                      />
                    </div>
                  </div>
                  <p>Professional quality product</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 ">
                <div className="bd-counter__item p-relative mb-30">
                  <div className="bd-counter__inner">
                    <div className="bd-counter__content">
                      <span className="bd-counter__title">expert mates</span>
                      <div className="bd-counter__number">
                        <span className="counter">200</span>
                        <span>+</span>
                      </div>
                    </div>
                    <div className="bd-counter__icon">
                      <img
                        src="assets/img/counter/counter-02.png"
                        alt="counter-icon"
                      />
                    </div>
                  </div>
                  <p>Completed with 100% satisfaction</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 ">
                <div className="bd-counter__item p-relative mb-30">
                  <div className="bd-counter__inner">
                    <div className="bd-counter__content">
                      <span className="bd-counter__title">
                        worldwide capture
                      </span>
                      <div className="bd-counter__number">
                        <span className="counter">1256</span>
                        <span>+</span>
                      </div>
                    </div>
                    <div className="bd-counter__icon">
                      <img
                        src="assets/img/counter/counter-03.png"
                        alt="counter-icon"
                      />
                    </div>
                  </div>
                  <p>90% clients happy with work</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 ">
                <div className="bd-counter__item p-relative">
                  <div className="bd-counter__inner">
                    <div className="bd-counter__content">
                      <span className="bd-counter__title">happy customer</span>
                      <div className="bd-counter__number">
                        <span className="counter">8600</span>
                        <span>+</span>
                      </div>
                    </div>
                    <div className="bd-counter__icon">
                      <img
                        src="assets/img/counter/counter-04.png"
                        alt="counter-icon"
                      />
                    </div>
                  </div>
                  <p>A content farm is a company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Counter area end */}
        {/* Testimonial area start */}
        <section className="bd-testimonial__area grey-bg pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="p-relative">
                  <div className="bd-section__title-wrapper mb-50">
                    <span className="bd-sub__title">Our Testimonial</span>
                    <h2 className="bd-section__title">what we provide</h2>
                  </div>
                  {/* If we need navigation buttons */}
                  <div className="bd-testimonial__navigatin">
                    <button className="testimonial-button-prev">
                      <i className="far fa-long-arrow-left" />
                    </button>
                    <button className="testimonial-button-next">
                      <i className="far fa-long-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-12">
                <div className="bd-testimonial__card text-center mb-30">
                  <div className="bd-testimonial__text">
                    <div className="bd-testimonial__icon">
                      <img
                        src="assets/img/testimonial/testimonial-icon.png"
                        alt="testimonial-icon"
                      />
                    </div>
                    <p>happy customer</p>
                    <div className="bd-testimonial__count">
                      <span className="counter">8600</span>
                      <span>+</span>
                    </div>
                    <div className="bd-testimonial__cercle-1" />
                    <div className="bd-testimonial__cercle-2" />
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12">
                <div className="bd-testimonial__wrapper mb-30">
                  <div className="testimonial-slide swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="bd-testimonial__content">
                          <div className="bd-testimonial__icon">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-regular fa-star" />
                          </div>
                          <h3>
                            “ Farmer tend to be predominantly enterprising
                            individuals, which means that they are usually quite
                            natural leaders who thrive at influencing and
                            persuading others. ”
                          </h3>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-testimonial__content">
                          <div className="bd-testimonial__icon">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-regular fa-star" />
                          </div>
                          <h3>
                            “ Farmer tend to be predominantly enterprising
                            individuals, which means that they are usually quite
                            natural leaders who thrive at influencing and
                            persuading others. ”
                          </h3>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-testimonial__content">
                          <div className="bd-testimonial__icon">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-regular fa-star" />
                          </div>
                          <h3>
                            “ Farmer tend to be predominantly enterprising
                            individuals, which means that they are usually quite
                            natural leaders who thrive at influencing and
                            persuading others. ”
                          </h3>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-testimonial__content">
                          <div className="bd-testimonial__icon">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-regular fa-star" />
                          </div>
                          <h3>
                            “ Farmer tend to be predominantly enterprising
                            individuals, which means that they are usually quite
                            natural leaders who thrive at influencing and
                            persuading others. ”
                          </h3>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-testimonial__content">
                          <div className="bd-testimonial__icon">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-regular fa-star" />
                          </div>
                          <h3>
                            “ Farmer tend to be predominantly enterprising
                            individuals, which means that they are usually quite
                            natural leaders who thrive at influencing and
                            persuading others. ”
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-container testimonial-nav">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="bd-testimonial__meta-text">
                          <h4>alonso dowson</h4>
                          <span>Head of Idea</span>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-testimonial__meta-text">
                          <h4>helson jhonson</h4>
                          <span>Founder</span>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-testimonial__meta-text">
                          <h4>alonso dowson</h4>
                          <span>CEO</span>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-testimonial__meta-text">
                          <h4>Sagor khan</h4>
                          <span>DVELOPER</span>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-testimonial__meta-text">
                          <h4>David Warner</h4>
                          <span>co-founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial area end */}
        {/* Product area start */}
        <section className="bd-product__area pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="bd-section__title-wrapper text-center mb-50">
                <span className="bd-sub__title">Featured</span>
                <h2 className="bd-section__title">featured product</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="bd-product__item text-center mb-30">
                  <div className="bd-product__img">
                    <img
                      src="assets/img/product/product-11.jpg"
                      alt="product-img"
                    />
                  </div>
                  <div className="bd-product__content">
                    <h4>
                      <a href="#">organic fresh meat</a>
                    </h4>
                    <span className="bd-product__new-price">$45.00</span>
                  </div>
                  <div className="bd-product__action">
                    <a
                      className="cart-btn"
                      href="javascript:void(0)"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick View"
                      data-bs-toggle="modal"
                    >
                      <i className="fal fa-cart-arrow-down" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick Shop"
                      data-bs-toggle="modal"
                      data-bs-target="#productmodal"
                    >
                      <i className="fal fa-eye" />
                    </a>
                    <a
                      className="wishlist-btn"
                      href="javascript:void(0)"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick Wishlist"
                      data-bs-toggle="modal"
                    >
                      {" "}
                      <i className="fal fa-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="bd-product__item text-center mb-30">
                  <div className="bd-product__img">
                    <img
                      src="assets/img/product/product-02.jpg"
                      alt="product-img"
                    />
                  </div>
                  <div className="bd-product__content">
                    <h4>
                      <a href="#">organic fresh milk</a>
                    </h4>
                    <span className="bd-product__new-price">$29.00</span>
                    <span className="bd-product__old-price">
                      <del>$19.00</del>
                    </span>
                  </div>
                  <div className="bd-product__action">
                    <a
                      className="cart-btn"
                      href="javascript:void(0)"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick View"
                      data-bs-toggle="modal"
                    >
                      <i className="fal fa-cart-arrow-down" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick Shop"
                      data-bs-toggle="modal"
                      data-bs-target="#productmodal"
                    >
                      <i className="fal fa-eye" />
                    </a>
                    <a
                      className="wishlist-btn"
                      href="javascript:void(0)"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick Wishlist"
                      data-bs-toggle="modal"
                    >
                      {" "}
                      <i className="fal fa-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="bd-product__item text-center mb-30">
                  <div className="bd-product__img">
                    <img
                      src="assets/img/product/product-03.jpg"
                      alt="product-img"
                    />
                  </div>
                  <div className="bd-product__content">
                    <h4>
                      <a href="#">mikado cheese bar</a>
                    </h4>
                    <span className="bd-product__new-price">$20.00</span>
                  </div>
                  <div className="bd-product__action">
                    <a
                      className="cart-btn"
                      href="javascript:void(0)"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick View"
                      data-bs-toggle="modal"
                    >
                      <i className="fal fa-cart-arrow-down" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick Shop"
                      data-bs-toggle="modal"
                      data-bs-target="#productmodal"
                    >
                      <i className="fal fa-eye" />
                    </a>
                    <a
                      className="wishlist-btn"
                      href="javascript:void(0)"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick Wishlist"
                      data-bs-toggle="modal"
                    >
                      {" "}
                      <i className="fal fa-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="bd-product__item text-center mb-30">
                  <div className="bd-product__img">
                    <img
                      src="assets/img/product/product-04.jpg"
                      alt="product-img"
                    />
                  </div>
                  <div className="bd-product__content">
                    <h4>
                      <a href="#">custard oil 500ml</a>
                    </h4>
                    <span className="bd-product__new-price">$34.00</span>
                    <span className="bd-product__old-price">
                      <del>$24.00</del>
                    </span>
                  </div>
                  <div className="bd-product__action">
                    <a
                      className="cart-btn"
                      href="javascript:void(0)"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick View"
                      data-bs-toggle="modal"
                    >
                      <i className="fal fa-cart-arrow-down" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick Shop"
                      data-bs-toggle="modal"
                      data-bs-target="#productmodal"
                    >
                      <i className="fal fa-eye" />
                    </a>
                    <a
                      className="wishlist-btn"
                      href="javascript:void(0)"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick Wishlist"
                      data-bs-toggle="modal"
                    >
                      {" "}
                      <i className="fal fa-heart" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="bd-product__btn mt-20 mb-30 d-flex justify-content-center">
                <a className="bd-theme__btn-4" href="shop.html">
                  more proudcts
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Product area end */}
        {/* Brand area start */}
        <div className="bd-brand__area green-bg-2 pt-70 pb-50">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="bd-brand-__main-wrapper">
                <div className="bd-brand-active swiper-container">
                  <div className="swiper-wrapper text-center">
                    <div className="swiper-slide">
                      <div className="bd-single__brand-2 mb-30">
                        <a href="#">
                          <img src="assets/img/brand/1.png" alt="brand-img" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand-2 mb-30">
                        <a href="#">
                          <img src="assets/img/brand/2.png" alt="brand-img" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand-2 mb-30">
                        <a href="#">
                          <img src="assets/img/brand/3.png" alt="brand-img" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand-2 mb-30">
                        <a href="#">
                          <img src="assets/img/brand/4.png" alt="brand-img" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand-2 mb-30">
                        <a href="#">
                          <img src="assets/img/brand/5.png" alt="brand-img" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand-2 mb-30">
                        <a href="#">
                          <img src="assets/img/brand/6.png" alt="brand-img" />
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
        {/* Team area start */}
        <section
          className="bd-team__area team-overlay include__bg-2 pt-120 pb-90"
          data-background="assets/img/bg/team-bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="bd-section__title-wrapper text-center mb-50">
                <span className="bd-sub__title s-2">Our Team</span>
                <h2 className="bd-section__title s-3">expert farmer</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-team__item mb-30">
                  <div className="bd-team__img w-img">
                    <img src="assets/img/team/team-01.png" alt="team-img" />
                    <div className="bd-team__social-wrapper">
                      <button className="bd-team__plus-btn">
                        <i className="fa-solid fa-plus" />
                      </button>
                      <div className="bd-team__social-link">
                        <a className="social-link-1" href="#">
                          <i className="fa-brands fa-twitter" />
                        </a>
                        <a className="social-link-2" href="#">
                          <i className="fa-brands fa-youtube" />
                        </a>
                        <a className="social-link-3" href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bd-team__content">
                    <h3>
                      <a href="team-details.html">rosalina d. william</a>
                    </h3>
                    <span>founder</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-team__item mb-30">
                  <div className="bd-team__img w-img">
                    <img src="assets/img/team/team-02.png" alt="team-img" />
                    <div className="bd-team__social-wrapper">
                      <button className="bd-team__plus-btn">
                        <i className="fa-solid fa-plus" />
                      </button>
                      <div className="bd-team__social-link">
                        <a className="social-link-1" href="#">
                          <i className="fa-brands fa-twitter" />
                        </a>
                        <a className="social-link-2" href="#">
                          <i className="fa-brands fa-youtube" />
                        </a>
                        <a className="social-link-3" href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bd-team__content">
                    <h3>
                      <a href="team-details.html">Alexis D. Dowson</a>
                    </h3>
                    <span>Head Of Idea</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-team__item mb-30">
                  <div className="bd-team__img w-img">
                    <img src="assets/img/team/team-03.png" alt="team-img" />
                    <div className="bd-team__social-wrapper">
                      <button className="bd-team__plus-btn">
                        <i className="fa-solid fa-plus" />
                      </button>
                      <div className="bd-team__social-link">
                        <a className="social-link-1" href="#">
                          <i className="fa-brands fa-twitter" />
                        </a>
                        <a className="social-link-2" href="#">
                          <i className="fa-brands fa-youtube" />
                        </a>
                        <a className="social-link-3" href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bd-team__content">
                    <h3>
                      <a href="team-details.html">miranda h. halim</a>
                    </h3>
                    <span>ceo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team area end */}
        {/* News area start */}
        <section className="bd-news__area pt-120 pb-65">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-md-8">
                <div className="bd-section__title-wrapper mb-50">
                  <span className="bd-sub__title">News Feeds</span>
                  <h2 className="bd-section__title">blog &amp; insights</h2>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="news__btn text-md-end mb-50">
                  <a className="bd-theme__btn-4" href="news-details.html">
                    more news
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="bd-news__item mb-30">
                  <div className="bd-news__thumb-2 w-img">
                    <a href="news-details.html">
                      <img src="assets/img/news/01.jpg" alt="news-thumb" />
                    </a>
                  </div>
                  <div className="bd-news__content-2">
                    <span className="bd-news__sub-title">Farm, Meat</span>
                    <h3 className="bd-news__title-2">
                      <a href="#">
                        to influence consumer <br />
                        behavior, also used
                      </a>
                    </h3>
                    <div className="bd-news__border">
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="bd-news__item mb-30">
                  <div className="bd-news__thumb-2 w-img">
                    <a href="news-details.html">
                      <img src="assets/img/news/02.jpg" alt="news-thumb" />
                    </a>
                  </div>
                  <div className="bd-news__content-2">
                    <span className="bd-news__sub-title">Farm, Meat</span>
                    <h3 className="bd-news__title-2">
                      <a href="#">
                        Farmers tend enterprise <br />
                        individual
                      </a>
                    </h3>
                    <div className="bd-news__border">
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
                            Anzila Yatrian
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="bd-news__item mb-30">
                  <div className="bd-news__thumb-2 w-img">
                    <a href="news-details.html">
                      <img src="assets/img/news/03.jpg" alt="news-thumb" />
                    </a>
                  </div>
                  <div className="bd-news__content-2">
                    <span className="bd-news__sub-title">Farm, Meat</span>
                    <h3 className="bd-news__title-2">
                      <a href="#">
                        which means that they <br />
                        are usually quite
                      </a>
                    </h3>
                    <div className="bd-news__border">
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
                            Kelian Anderson
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="bd-news__item mb-30">
                  <div className="bd-news__thumb-2 w-img">
                    <a href="news-details.html">
                      <img src="assets/img/news/04.jpg" alt="news-thumb" />
                    </a>
                  </div>
                  <div className="bd-news__content-2">
                    <span className="bd-news__sub-title">Farm, Meat</span>
                    <h3 className="bd-news__title-2">
                      <a href="#">
                        natural leaders who &amp; <br />
                        thrive at influencing
                      </a>
                    </h3>
                    <div className="bd-news__border">
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
                            Peter Anderson
                          </span>
                        </div>
                      </div>
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
        <section
          className="bd-footer__area p-relative"
          data-background="assets/img/bg/section-bg.jpg"
        >
          <div className="footer__style-2">
            <div className="bd-footer__top">
              <div className="container">
                <div className="bd-footer__top-main white-bg">
                  <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="bd-footer__top-link">
                        <ul>
                          <li>
                            <a href="faq.html">faq</a>
                          </li>
                          <li>
                            <a href="about.html">careers</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 d-none d-lg-block">
                      <div className="bd-footer__logo p-relative">
                        <a href="index.html">
                          <img
                            className="bd-footer__top-logo"
                            src="assets/img/logo/logo-3.png"
                            alt="logo"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 ">
                      <div className="bd-footer__top-social text-md-end d-none d-md-block">
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
                </div>
              </div>
            </div>
            <div className="bd-footer__main">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="bd-footer__widget footer-col-1 mb-50">
                      <div className="bd-footer__title">
                        <h4>about us</h4>
                      </div>
                      <div className="bd-footer__paragraph">
                        <p>
                          A farm is a plot of land that is used to grow crops
                          and raise livestock, as in our farm, we raise sheep
                          and sell their wool. The word farm is also used as a
                          verb to mean to work land.
                        </p>
                        <div className="bd-link__btn">
                          <a href="contact.html">get in touch</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="bd-footer__widget footer-col-2 mb-50">
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
                    <div className="bd-footer__widget footer-col-3 mb-50">
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
                                src="assets/img/icon/footer-text-2.png"
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
                    <div className="bd-footer__widget footer-col-4 mb-50">
                      <div className="bd-footer__title">
                        <h4>Subscribe us</h4>
                      </div>
                      <div className="bd-footer__subcribe">
                        <p>
                          Subscribe us &amp; recive our office &amp; update in
                          your inbox directly
                        </p>
                        <form action="#">
                          <div className="bd-footer__input p-relative mb-20">
                            <input type="text" placeholder="info@webmail.com" />
                            <i className="fa-solid fa-envelope-open" />
                          </div>
                          <button className="bd-theme__btn-3">
                            subscribe now
                          </button>
                        </form>
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
      {/* Back to top end */}
      {/* JS here */}
    </>
  );
};

export default AllHome1;
