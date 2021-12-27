import React from "react";

const Upcoming = () => {
  return (
    <div data-aos="fade-up" className="coming">
      <div data-aos="fade-right" className="coming-main">
        <div>
          <img src="https://treedefi.com/static/home/treedefi-app.png" />
        </div>
        <div className="coming-text">
          <div>
            <h1>Coming Soon</h1>
            <p>
              We have recently started development on a new wallet tracking app
              for TreeDefi, that way investors can check their assets and farms
              easily while on the go.
            </p>
            <img src="https://treedefi.com/static/home/gplay_ic.png" />
            <img src="https://treedefi.com/static/home/appstr_ic.png" />
          </div>
        </div>
      </div>
      <div
        className="down-div"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "",
        }}
      >
        <div style={{ marginTop: "120px " }}>
          <h1 style={{ fontSize: "4rem", textAlign: "center" }}>As Seen On</h1>
          <p>
            The various platforms and publications where you might've heard
            about our project.
          </p>
        </div>
      </div>
      <div className="upcoming-next">
        <div className="upcoming-card">
          <img src="https://treedefi.com/static/home/press1.png" />
        </div>
        <div className="upcoming-card">
          <img src="https://treedefi.com/static/home/press2.png" />
        </div>
        <div className="upcoming-card">
          <img src="https://treedefi.com/static/home/press3.png" />
        </div>
      </div>

      <div>
        <div className="upcoming-next">
          <div className="upcoming-card">
            <img src="https://treedefi.com/static/home/press4.png" />
          </div>
          <div className="upcoming-card">
            <img src="https://treedefi.com/static/home/press5.png" />
          </div>
          <div className="upcoming-card">
            <img src="https://treedefi.com/static/home/press6.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
