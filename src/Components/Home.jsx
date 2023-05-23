import React from "react";
import vg from "../Assets/robo_move.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>DigitalNexus</h1>
          <p>Empowering Digital Explorers </p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            DigitalNexus is a tech-focused website that serves as a hub for all
            things digital.Our mission is to bridge the gap between
            technology and its users, catering to both tech enthusiasts and
            individuals looking to enhance their digital knowledge. Whether you
            are a beginner seeking guidance or a seasoned tech professional
            seeking the latest trends, DigitalNexus is here to empower you with
            valuable content.{" "}
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>who we are?</h1>
          <p>
            At DigitalNexus, we are a passionate team of tech enthusiasts and
            experts driven by a shared love for all things digital. We believe
            in the transformative power of technology and its ability to shape
            our world in profound ways. Our collective expertise spans a wide
            range of domains, including software development, artificial
            intelligence, cybersecurity, data science, and more. With our deep
            understanding of the tech landscape, we are dedicated to delivering
            reliable, accurate, and insightful information to our audience.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
