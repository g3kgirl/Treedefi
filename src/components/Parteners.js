import React from "react";

const Parteners = () => {
  return (
    <div data-aos="fade-up" className="partners">
      <h3>Capital Partners :</h3>
      <div
        className="parteners-top"
        // style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          style={{ height: "119px" }}
          src="https://treedefi.com/static/home/magnetocapital.png"
        />
      </div>
      <h3>Listed on:</h3>
      <div className="partners-mid">
        <div className="sub-div">
          <img
            style={{ height: "80px" }}
            src="https://treedefi.com/static/home/coinbase.png"
          />
        </div>

        <div className="sub-div">
          <img
            style={{ height: "80px" }}
            src="https://treedefi.com/static/home/coinmarketcap.png"
          />
        </div>
        <div className="sub-div">
          <img
            style={{ height: "80px" }}
            src="https://treedefi.com/static/home/coingecko.png"
          />
        </div>
      </div>

      <div className="partners-mid">
        <div className="sub-div">
          <img src="https://treedefi.com/static/home/dapp.png" />
        </div>
        <div className="sub-div">
          <img src="https://treedefi.com/static/home/delta.png" />
        </div>
      </div>
      <div className="partners-down">
        <h1>Real World Applications</h1>
        <p>
          Our ecosystem allows investors to have a real world impact, and offers
          the opportunity to offset their CO2 footprint.
        </p>
      </div>
    </div>
  );
};

export default Parteners;
