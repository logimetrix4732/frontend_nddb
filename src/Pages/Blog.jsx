import { useEffect } from "react";
import ImageHeader from "../Components/Shared/ImageHeader";

const Blog = () => {
  
useEffect(() => {
  console.log(import.meta.env.VITE_API_BASE_URL);
}, []);

  return (
    <>
      <ImageHeader
        title="News Feeds"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <>
        {/* Postbox-area-start */}
        <section className="bd-postbox__area pt-120 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-xxl-9 col-xl-9 col-lg-12">
                <div className="bd-postbox__wrapper mb-60">
                  <div className="bd-postbox__item mb-40">
                    <div className="bd-postbox__thumb">
                      <a href="news-details.html">
                        <img
                          src="assets/img/news/postbox/postbox-thumb-01.jpg"
                          alt="news-thumb"
                        />
                      </a>
                      <span className="bd-postbox__card-1">
                        Business, Design
                      </span>
                      <div className="bd-postbox__card-2">
                        <div className="bd-postbox__card-wrapper">
                          <img
                            src="assets/img/news/postbox/card-thumb.jpg"
                            alt="postbox-card"
                          />
                          <span>by Hetmayar</span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-postbox__content">
                      <h3 className="bd-postbox__title mb-15">
                        <a href="news-details.html">
                          Service Construct deals physical damage with his basic
                          attack in the match.
                        </a>
                      </h3>
                      <div className="bd-postbox__paragraph">
                        <p>
                          Novia's spaciously two bedroom apartments are perfect
                          for families and even business partners. Look out into
                          the Manhattan skyline from the open fully equipped
                          kitchen.
                        </p>
                      </div>
                      <div className="bd-postbox__meta">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-eye" /> 100 Views
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-comments" /> 0 Comments
                          </a>
                        </span>
                        <span>
                          <i className="fa-solid fa-calendar-days" /> 24th March
                          2022
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bd-postbox__item mb-40">
                    <div className="bd-postbox__thumb postbox__overlay include__bg">
                      <a href="news-details.html">
                        <img
                          src="assets/img/news/postbox/soundcloud.jpg"
                          alt="soundcloud-thumb"
                        />
                      </a>
                      <img
                        className="bd-soundcloud__logo"
                        src="assets/img/logo/soundcloud.png"
                        alt="soundcloud-logo"
                      />
                    </div>
                    <div className="bd-postbox__content style-2">
                      <h3 className="bd-postbox__title mb-15">
                        <a href="news-details.html">
                          If any construction company wishes to commence its
                          business in Bangladesh.{" "}
                        </a>
                      </h3>
                      <div className="bd-postbox__text">
                        <p>
                          Novia's spaciously two bedroom apartments are perfect
                          for families and even business partners. Look out into
                          the Manhattan skyline from the open fully equipped
                          kitchen.
                        </p>
                      </div>
                      <div className="bd-postbox__meta">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-eye" /> 150 Views
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-comments" /> 30 Comments
                          </a>
                        </span>
                        <span>
                          <i className="fa-solid fa-calendar-days" /> 15th March
                          2022
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bd-postbox__item mb-50">
                    <div className="bd-postbox__blockquoite p-relative z-index-1">
                      <div className="bd-postbox__quoite">
                        <div className="bd-postbox__quoite-icon">
                          <img
                            src="assets/img/news/postbox/quote-01.png"
                            alt="blockquote-icon"
                          />
                        </div>
                        <div className="bd-postbox__quoite-content">
                          <h3 className="bd-postbox__title">
                            Office/partnership by submitting all the relevant
                            documents
                          </h3>
                        </div>
                      </div>
                      <div className="bd-postbox__quoite-icon-2">
                        <img
                          src="assets/img/news/postbox/quote-02.png"
                          alt="blockquote-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bd-basic__pagination mb-30">
                    <nav>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-angles-left" />
                          </a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <span className="current">2</span>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">...</a>
                        </li>
                        <li>
                          <a href="#">10</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-angles-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6">
                <div className="bd-postbox__sidebar mb-60">
                  <div className="bd-sidebar__widget mb-45">
                    <div className="bd-sidebar__widget-content">
                      <div className="bd-sidebar__title mb-30">
                        <h4>About Me</h4>
                      </div>
                      <div className="bd-sidebar__author-box text-center">
                        <div className="bd-sidebar__author-thumb">
                          <img
                            src="assets/img/news/postbox/about-thumb-01.png"
                            alt="sidebar-thumb"
                          />
                        </div>
                        <div className="bd-sidebar__author-content">
                          <h4>Alonso D. Dowson</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consect etur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                        <div className="bd-sidebar__social">
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-behance" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-linkedin" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-youtube" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bd-sidebar__widget mb-45">
                    <div className="bd-sidebar__widget-content">
                      <div className="bd-sidebar__title mb-30">
                        <h4>Search Here</h4>
                      </div>
                      <div className="bd-sidebar__search">
                        <form action="#">
                          <div className="bd-sidebar__input">
                            <input
                              type="text"
                              placeholder="Search your keyword..."
                            />
                            <button type="submit">
                              <i className="far fa-search" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="bd-sidebar__widget mb-45">
                    <div className="bd-sidebar__widget-content">
                      <div className="bd-sidebar__title mb-30">
                        <h4>Popular Feeds</h4>
                      </div>
                      <div className="bd-sidebar__news-fi mb-20">
                        <div className="bd-sidebar__news-feed d-flex align-items-center">
                          <div className="bd-sidebar__news-thumb mr-20">
                            <a href="news-details.html">
                              <img
                                src="assets/img/news/postbox/news-sm-01.png"
                                alt="sidebar-thumb"
                              />
                            </a>
                          </div>
                          <div className="bd-sidebar__news-text">
                            <h5>
                              <a href="news-details.html">
                                Having education in an area helps
                              </a>
                            </h5>
                            <span>
                              <a href="news-details.html">
                                <i className="fa-solid fa-calendar-days" /> 26th
                                March 2022
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bd-sidebar__news-fi mb-20">
                        <div className="bd-sidebar__news-feed d-flex align-items-center">
                          <div className="bd-sidebar__news-thumb mr-20">
                            <a href="news-details.html">
                              <img
                                src="assets/img/news/postbox/news-sm-02.png"
                                alt="sidebar-thumb"
                              />
                            </a>
                          </div>
                          <div className="bd-sidebar__news-text">
                            <h5>
                              <a href="news-details.html">
                                People think, feel, &amp; behave in a way
                              </a>
                            </h5>
                            <span>
                              <a href="news-details.html">
                                <i className="fa-solid fa-calendar-days" /> 12th
                                Apr 2022
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bd-sidebar__news-fi mb-20">
                        <div className="bd-sidebar__news-feed d-flex align-items-center">
                          <div className="bd-sidebar__news-thumb mr-20">
                            <a href="news-details.html">
                              <img
                                src="assets/img/news/postbox/news-sm-03.png"
                                alt="sidebar-thumb"
                              />
                            </a>
                          </div>
                          <div className="bd-sidebar__news-text">
                            <h5>
                              <a href="news-details.html">
                                That contributes to their success
                              </a>
                            </h5>
                            <span>
                              <a href="news-details.html">
                                <i className="fa-solid fa-calendar-days" /> 18th
                                May 2022
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bd-sidebar__widget mb-45">
                    <div className="bd-sidebar__widget-content">
                      <div className="bd-sidebar__title mb-30">
                        <h4>Categories</h4>
                      </div>
                      <div className="bd-sidebar__widget-link">
                        <ul>
                          <li>
                            <a href="news-details.html">
                              Business <span>26</span>
                            </a>
                          </li>
                          <li>
                            <a href="news-details.html">
                              Consultant <span>30</span>
                            </a>
                          </li>
                          <li>
                            <a href="news-details.html">
                              Creative <span>71</span>
                            </a>
                          </li>
                          <li>
                            <a href="news-details.html">
                              UI/UX <span>56</span>
                            </a>
                          </li>
                          <li>
                            <a href="news-details.html">
                              Technology <span>60</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bd-sidebar__widget mb-45">
                    <div className="bd-sidebar__widget-content">
                      <div className="bd-sidebar__title mb-30">
                        <h4>Instagram Feeds</h4>
                      </div>
                      <div className="bd-sidebar__tag-link">
                        <a href="#">Business</a>
                        <a href="#">Design</a>
                        <a href="#">UX</a>
                        <a href="#">Usability</a>
                        <a href="#">Develop</a>
                        <a href="#">icon</a>
                        <a href="#">Business</a>
                        <a href="#">Kit</a>
                        <a href="#">Keyboard</a>
                        <a href="#">Mouse</a>
                        <a href="#">Tech</a>
                      </div>
                    </div>
                  </div>
                  <div className="bd-sidebar__widget mb-30">
                    <div className="bd-sidebar__widget-content">
                      <div className="bd-sidebar__title mb-30">
                        <h4>Sponsor Adds</h4>
                      </div>
                      <div className="bd-sidebar__sponser-thumb w-img">
                        <img
                          src="assets/img/news/postbox/sponsor.jpg"
                          alt="sponsor-thumb"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Postbox-area-end */}
      </>
    </>
  );
};

export default Blog;
