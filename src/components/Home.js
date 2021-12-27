import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="home">
        <div className="bg-img">
          <img
            style={{ width: "100%" }}
            src="https://treedefi.com/static/img/grdnt_bg.jpg"
          />
        </div>
        <div className="hero_container">
          <div className="hero_container-left">
            <div>
              <h1>The Frist Eco Friendly DeFi Project </h1>
            </div>
            <div className=" hero_down">
              <h2>Total Planted Trees (TPT)</h2>
              <h3>689010</h3>
              <p>Kg of CO2 absorbed every year</p>
              <button className="hero-btn">Whitepaper</button>
              <button className="hero-btn">Donation</button>
            </div>
          </div>
          <div className="hero_container-right">
            <img
              src="https://treedefi.com/static/home/home_b_img.png"
              class="hero_container-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
