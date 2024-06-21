import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import FavoritesSection from "../Search/FavoritesSection";
// import hero_banner from "../../assets/hero_banner.jpg";
// import hero_title from "../../assets/hero_title.png";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import InfoIcon from "@mui/icons-material/Info";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      {/* creating the Hero section */}
      {/* <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="captiom-img" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi earum
            pariatur ipsam tempora libero dolore, ab quisquam consequuntur unde
            a inventore saepe aut quas quo ex repudiandae rerum molestiae nihil.
          </p>
          <div className="hero-btn">
            <button className="btn">
              {" "}
              <PlayArrowIcon className=".hero-btn" />
              Play
            </button>
            <button className="btn dark-btn">
              {" "}
              <InfoIcon className=".hero-btn" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div> */}
      <div className="more-cards">
      <FavoritesSection />
        <TitleCards title={"Blockbuster Movies"} category="top_rated" />
        <TitleCards title={"Only on Netflix"} category="popular" />
        <TitleCards title={"Upcoming"} category="upcoming" />
        <TitleCards title={"Top Pics for you"} category="now_playing" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
