import { Link } from "react-router-dom";
import "./../styles/AboutUs.css";
import ImgAboutUs from "./../images/aboutus.avif";
import Rating from "./Rating";

export default function About() {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container bottomContainer">
        <div className="ultimateImg">
          <img className="mainImg" src={ImgAboutUs} alt="error" />
          <div className="purpleBox">
            <p className="purpleText">
              "Amazing experience! Fast delivery, excellent quality. Will
              definitely shop here again!"
            </p>
            <Rating />
          </div>
        </div>
        <div className="allText bottomText">
          <p className="text-blk headingText">About Us</p>
          <p className="text-blk subHeadingText">
            Experience Fashion Excellence Online
          </p>
          <p className="text-blk description">
            Discover unparalleled style and convenience at our online clothing
            store. Dive into a world of fashion with curated collections,
            trendsetting designs, and hassle-free shopping, all tailored to
            elevate your wardrobe experience.
          </p>
          <Link to="/" className="explore">
            View Our Trends
          </Link>
        </div>
      </div>
    </div>
  );
}
