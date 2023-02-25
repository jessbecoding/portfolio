import React from "react";
import "../style/homepage.css";
import banner from "../assets/friends.jpg";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import { SliderData } from "./SliderData";

const Homepage = () => {
  return (
    <div className="homeContainer">
      <div className="bannerContainer">
        <div className="bannerDiv">
          <img className="banner" src={banner} alt="" />
        </div>
        <div className="slogan">We're in the business of best friends.</div>
      </div>
      <div className="aboutContainer">
        <div className="aboutText">
          <div>
            <h3>There's a Pawsibility...</h3>
          </div>
          <div>
            <p>
              Pawsibility was born of my own pet search. I had my senior
              chihuhua, Leia, for nearly 10 years. I wanted to keep her as young
              as possible by getting her a playmate. Despite her age, Leia is
              still very playful and I knew she'd have no problems keeping up. I
              used PetFinder to aid in my search, and they also provided the API
              that powers this project.
            </p>
            <p>
              I wanted to try to create something that I wanted to use.
              PetFinder is great but, I thought it would be fun to be able to
              use the functionality with my own aesthetics and preferences of
              use. To make this project, I used Canva to develop the logo and
              theme. I used FontAwesome for the icons in the navbar. I used
              Unsplash for the images either not provided by the API or created
              by myself using Canva. The code was written using JavaScript,
              React, Redux, and vanilla CSS.
            </p>
            <p>
              I did eventually find a new member to add to the family: Millie.
              She's such a joy and this project just made me think how lucky I
              was to find her first!
            </p>
          </div>
        </div>

        <div className="millieContainer">
          <ImageSlider slides={SliderData} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
