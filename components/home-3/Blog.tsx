import blogs1 from "@/public/images/blogs-img-1.png";
import blogs2 from "@/public/images/blogs-img-2.png";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="recently-completed blogs">
      <div className="container pt-120 pb-120">
        <div className="row section-header justify-content-center">
          <div className="col-lg-6 text-center">
            <h4 className="sub-title">
              The Latest <span>Trends and Technologies</span>
            </h4>
            <span className="fs-two heading mb-6">
              Tips and Tricks from Our <span>Game Development Experts</span>
            </span>
            <p>
              Behind the scenes, we share our game development process, research
              and development efforts, and reflections on our growth in the
              gaming industry
            </p>
          </div>
        </div>
        <div className="row cus-mar">
          <div className="col-lg-6">
            <div className="single-box">
              <div className="position-relative d-grid align-items-center">
                <div className="img-box">
                  <Image src={blogs1} alt="Image" />
                </div>
                <div className="position-absolute cus-position bottom-0 start-0">
                  <div className="content-box p-3 p-sm-6">
                    <div className="top-bar d-flex align-items-center gap-3">
                      <h5>News</h5>
                      <span>25 January,2023</span>
                    </div>
                    <Link href="/blog-single">
                      <h4 className="mt-3">
                        Crafting Digital Worlds with Expertise
                      </h4>
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
          </div>
          <div className="col-lg-6">
            <div className="single-box">
              <div className="position-relative d-grid align-items-center">
                <div className="img-box">
                  <Image src={blogs2} alt="Image" />
                </div>
                <div className="position-absolute cus-position bottom-0 start-0">
                  <div className="content-box p-3 p-sm-6">
                    <div className="top-bar d-flex align-items-center gap-3">
                      <h5>News</h5>
                      <span>25 January,2023</span>
                    </div>
                    <Link href="/blog-single">
                      <h4 className="mt-3">
                        Bringing Games to Life with Stunning Graphics
                      </h4>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
