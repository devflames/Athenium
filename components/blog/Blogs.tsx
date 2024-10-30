import blog1 from "@/public/images/blogs-img-1.png";
import blog2 from "@/public/images/blogs-img-2.png";
import blog3 from "@/public/images/blogs-img-3.png";
import blog4 from "@/public/images/blogs-img-4.png";
import Image from "next/image";
import article1 from "@/public/images/article-img-1.png";
import article2 from "@/public/images/article-img-2.png";
import article3 from "@/public/images/article-img-3.png";
import Link from "next/link";
import { useState } from "react";
import { blogs } from "@/public/data/blogs";

const Blogs = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleMouseMove = (e: any) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };
  const style = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  } as React.CSSProperties;
  const tags = [
    "App",
    "Game App",
    "Game Art",
    "Game Animation",
    "Game QA Testing",
    "Unity Development",
    "3D ART",
    "3D Game Modeling",
    "3D Animation",
    "Environment Design",
    "3D Characters",
  ];
  return (
    <section className="recently-completed blogs blog-section pb-120">
      <div className="container pt-120">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            {blogs.map(({ id, title, img }) => (
              <div key={id} className="single-box">
                <div className="position-relative d-grid align-items-center">
                  <div className="img-box">
                    <Image src={img} className="w-100" alt="Image" />
                  </div>
                  <div className="position-absolute cus-position bottom-0 start-0">
                    <div className="content-box p-3 p-sm-6">
                      <div className="top-bar d-flex align-items-center gap-3">
                        <h5>News</h5>
                        <span>25 January,2023</span>
                      </div>
                      <Link href="/blog-single">
                        <h3 className="visible-slowly-bottom mt-3">{title}</h3>
                      </Link>
                      <Link
                        href="/blog-single"
                        className="end-area mt-8 d-center">
                        <i className="material-symbols-outlined"> call_made </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="single-box">
              <nav aria-label="Page navigation" className="d-flex mt-15">
                <ul className="pagination justify-content-center align-items-center">
                  <li className="page-item">
                    <Link
                      className="page-link previous"
                      href="#"
                      aria-label="Previous">
                      <i className="material-symbols-outlined"> west </i>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      01
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link active" href="#">
                      02
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      03
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      04
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link next" href="#" aria-label="Next">
                      <i className="material-symbols-outlined"> east </i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 mt-8 mt-lg-0 service-details">
            <div className="d-grid gap-5 cus-overflow cus-scrollbar side-wrapper">
              <div className="d-flex flex-column gap-6">
                <div className="sidebar-area p-5">
                  <h3 className="visible-slowly-bottom mb-6">Search</h3>
                  <div className="input-area mt-6 p-1 d-flex align-items-center">
                    <input type="text" className="ps-3" placeholder="Search" />
                    <div className="btn-area">
                      <button
                        onMouseMove={handleMouseMove}
                        style={style}
                        className="box-style btn-box border-re p-2">
                        <i className="material-symbols-outlined"> search </i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="sidebar-area p-5">
                  <h3 className="visible-slowly-bottom mb-6">Category</h3>
                  <ul className="underwriters d-grid gap-3">
                    <li>
                      <Link
                        href="/#"
                        className="d-center justify-content-between">
                        <div className="d-flex gap-1">
                          <div className="icon-wrap">
                            <i className="material-symbols-outlined mat-icon fs-five">
                              double_arrow
                            </i>
                          </div>
                          <span>Game Development</span>
                        </div>
                        <div className="right-area">
                          <span>(08)</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#"
                        className="d-center justify-content-between">
                        <div className="d-flex gap-1">
                          <div className="icon-wrap">
                            <i className="material-symbols-outlined mat-icon fs-five">
                              double_arrow
                            </i>
                          </div>
                          <span>Game Art</span>
                        </div>
                        <div className="right-area">
                          <span>(08)</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#"
                        className="d-center justify-content-between">
                        <div className="d-flex gap-1">
                          <div className="icon-wrap">
                            <i className="material-symbols-outlined mat-icon fs-five">
                              double_arrow
                            </i>
                          </div>
                          <span>Game Animation</span>
                        </div>
                        <div className="right-area">
                          <span>(07)</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#"
                        className="d-center justify-content-between">
                        <div className="d-flex gap-1">
                          <div className="icon-wrap">
                            <i className="material-symbols-outlined mat-icon fs-five">
                              double_arrow
                            </i>
                          </div>
                          <span>Game QA Testing</span>
                        </div>
                        <div className="right-area">
                          <span>(06)</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#"
                        className="d-center justify-content-between">
                        <div className="d-flex gap-1">
                          <div className="icon-wrap">
                            <i className="material-symbols-outlined mat-icon fs-five">
                              double_arrow
                            </i>
                          </div>
                          <span>Game UI/UX</span>
                        </div>
                        <div className="right-area">
                          <span>(04)</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#"
                        className="d-center justify-content-between">
                        <div className="d-flex gap-1">
                          <div className="icon-wrap">
                            <i className="material-symbols-outlined mat-icon fs-five">
                              double_arrow
                            </i>
                          </div>
                          <span>Out Staffing</span>
                        </div>
                        <div className="right-area">
                          <span>(04)</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-area p-5">
                  <h3 className="visible-slowly-bottom mb-6">
                    Related Articles
                  </h3>
                  <div className="cus-mar">
                    <div className="single-box d-center justify-content-start gap-5">
                      <div className="img-area">
                        <Image src={article1} alt="Image" />
                      </div>
                      <div className="info-area">
                        <Link href="/blog">
                          <h6>Tips for Creating Engaging Game Characters</h6>
                        </Link>
                        <div className="article-info pt-3 d-flex gap-5">
                          <div className="d-flex gap-1 single">
                            <div className="icon-wrap d-flex align-items-end">
                              <i className="material-symbols-outlined mat-icon fs-six">
                                schedule
                              </i>
                            </div>
                            <span>15 Min</span>
                          </div>
                          <div className="d-flex gap-1 single ps-5">
                            <div className="icon-wrap d-flex align-items-end">
                              <i className="material-symbols-outlined mat-icon fs-six">
                                visibility
                              </i>
                            </div>
                            <span>55</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-box d-center justify-content-start gap-5">
                      <div className="img-area">
                        <Image src={article2} alt="Image" />
                      </div>
                      <div className="info-area">
                        <Link href="/blog">
                          <h6>The Pros and Cons of Different Game Engines</h6>
                        </Link>
                        <div className="article-info pt-3 d-flex gap-5">
                          <div className="d-flex gap-1 single">
                            <div className="icon-wrap d-flex align-items-end">
                              <i className="material-symbols-outlined mat-icon fs-six">
                                schedule
                              </i>
                            </div>
                            <span>15 Min</span>
                          </div>
                          <div className="d-flex gap-1 single ps-5">
                            <div className="icon-wrap d-flex align-items-end">
                              <i className="material-symbols-outlined mat-icon fs-six">
                                visibility
                              </i>
                            </div>
                            <span>55</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-box d-center justify-content-start gap-5">
                      <div className="img-area">
                        <Image src={article3} alt="Image" />
                      </div>
                      <div className="info-area">
                        <Link href="/blog">
                          <h6>The Role of Storytelling in Game Design</h6>
                        </Link>
                        <div className="article-info pt-3 d-flex gap-5">
                          <div className="d-flex gap-1 single">
                            <div className="icon-wrap d-flex align-items-end">
                              <i className="material-symbols-outlined mat-icon fs-six">
                                schedule
                              </i>
                            </div>
                            <span>15 Min</span>
                          </div>
                          <div className="d-flex gap-1 single ps-5">
                            <div className="icon-wrap d-flex align-items-end">
                              <i className="material-symbols-outlined mat-icon fs-six">
                                visibility
                              </i>
                            </div>
                            <span>55</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-area p-5">
                  <h3 className="visible-slowly-bottom mb-6">Follow Us</h3>
                  <ul className="d-flex gap-4 social-area">
                    <li>
                      <Link
                        href="/https://www.facebook.com"
                        aria-label="Facebook"
                        className="d-center">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/https://www.instagram.com"
                        aria-label="Instagram"
                        className="d-center">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/https://www.linkedin.com"
                        aria-label="Linkedin"
                        className="d-center">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/https://twitter.com"
                        aria-label="Twitter"
                        className="d-center">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-area py-8 py-sm-15 text-center p-5">
                  <h5 className="mb-4">
                    <span>Let’s Work Together</span>
                  </h5>
                  <h3 className="visible-slowly-bottom mb-8">
                    Game Studio Services Agency
                  </h3>
                  <div className="btn-area alt-bg">
                    <Link href="/contact" className="box-style btn-box">
                      Contact us
                      <i className="material-symbols-outlined mat-icon fs-five">
                        chevron_right
                      </i>
                    </Link>
                  </div>
                  <Link href="/#" className="d-center mt-8 call-number gap-2">
                    <i className="material-symbols-outlined mat-icon fs-six">
                      call
                    </i>
                    +000 (123) 456 88
                  </Link>
                </div>
                <div className="sidebar-area p-5">
                  <h3 className="visible-slowly-bottom mb-6">Popular Tags</h3>
                  <ul className="tags d-flex flex-wrap gap-2">
                    {tags.map((item) => (
                      <li
                        onMouseMove={handleMouseMove}
                        style={style}
                        key={item}
                        className="box-style btn-box">
                        <Link href="/#">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
