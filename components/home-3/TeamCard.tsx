import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
type teamProps = {
  name: string;
  img: StaticImageData;
  designation?: string;
};
const TeamCard = ({ name, img, designation = "Artist" }: teamProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="col-xl-3 col-sm-6">
      <div className={`single-box text-center ${open && "active"}`}>
        <div className="img-area position-relative mb-10 d-center">
          <Image src={img} alt="Image" />
          <button
            className="social-hide-btn d-center position-absolute"
            onClick={() => setOpen(!open)}>
            <i className="material-symbols-outlined">
              {" "}
              {open ? "remove" : "add"}{" "}
            </i>
          </button>
          <ul className="d-grid position-absolute gap-4 social-area">
            <li>
              <Link
                href="https://www.facebook.com"
                aria-label="Facebook"
                className="d-center">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com"
                aria-label="Instagram"
                className="d-center">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com"
                aria-label="Linkedin"
                className="d-center">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="d-center">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
          </ul>
        </div>
        <h4 className="mb-2">{name}</h4>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;
