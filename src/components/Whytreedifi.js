import React from "react";

const Whytreedifi = () => {
  return (
    <div data-aos="fade-up" className="treedifi">
      <div className="treedifi-text">
        <div>
          <h1>Why TreeDiFi</h1>
          <p>
            What differentiates us from the other competitors on the Blockchain?
          </p>
        </div>
      </div>
      <div className="treedifi-card">
        <div>
          <img src="https://treedefi.com/static/home/environment-bro.png" />
        </div>
        <div className="treedifi-card-text">
          <h1>Fighting Cryptocurrency Carbon Footprint</h1>
          <p>
            We use 1/3 of our deposit fees to plant real trees around the world.
            This is done through our favourite planting organizations and more
            recently through our planting projects around the world, hosted by
            our community ambassadors.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div>
        <div className="treedifi-card-2">
          <div className="treedifi-card-text">
            <h1>We Are Here For Long Run!</h1>
            <p>
              We've locked the dev funds and initial liquidity of the project to
              ensure our user's trust while operating on TreeDefi.
            </p>
            <br />
            <h2>
              We are also working on Harvest Guard, a feature that will protect
              TREE and SEED from market manipulation created by whales.
            </h2>
            <div>
              <button>Liquidity Locked</button>
              <button>Audited by Certik</button> <br />
              <button>Migration Code Removed</button>
              <button>Anti Flash Loan</button>
            </div>
          </div>
          <div>
            <img src="https://treedefi.com/static/home/longrun_img.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whytreedifi;
