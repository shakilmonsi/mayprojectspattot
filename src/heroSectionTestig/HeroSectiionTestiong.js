import React from 'react';

const HeroSectiionTestiong = () => {
    return (
        <div>
               <div
        id="carouselExampleControls"
        className="carousel slide "
        data-ride="carousel"
      >
      <div
      style={{backgroundColor:"#000"}}
      >




        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p style={{ height: "27px", color: "#FFFFFF" }}>Starting at $235.00</p>
                <h2 style={{ color: "#FFFFFF" }}>
                The Best Tablet Collection
Top Eid Sale 2023

                </h2>
                <p className="price" style={{ color: "#FFFFFF" }}>Exclusive Offer <span style={{ color: "#FFC700" }}>
                  -35%</span> .off this week</p>
                <button className="buy-now-button" style={{
                  width: "190px", height: "60px",
                  borderRadius: "10px"
                }} ><span style={{ fontSize: '23px', color: "#FFFFFF" }}>
                    shop new
                  </span></button>
              </div>
              <div className="col-md-6">
                <img
                  src={hero}
                  className="d-block w-100" style={{ width: "665.63px", height: "378.73px" }}

                  alt="..."
                />
              </div>
            </div>
          </div>

          
          <div className="carousel-item">
            <div className="row  align-items-center">
              <div className="col-md-7">
                <h1>Cool Dude Headphone</h1>
                <p>
                  This is the best headphone in the world for people who just want
                  to waste time in front of funky world.
                </p>
                <h1 className="price">$420</h1>
                <button className="buy-now-button">Buy Now</button>
              </div>
              <div className="col-md-5">
                <img
                  src="images/banner-images/headphone.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1>X-Box for your living room</h1>
                <p>
                  This is the best x-box in the world for people who just want to
                  waste time in front of fake sports.
                </p>
                <h1 className="price">$600</h1>
                <button className="buy-now-button">Buy Now</button>
              </div>
              <div className="col-md-5">
                <img
                  src="images/banner-images/xbox.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

      
      </div>
      <a   style={{marginLeft:800,marginTop:300}}
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
         style={{marginRight:800,marginTop:300}}
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
            
        </div>
    );
};

export default HeroSectiionTestiong;