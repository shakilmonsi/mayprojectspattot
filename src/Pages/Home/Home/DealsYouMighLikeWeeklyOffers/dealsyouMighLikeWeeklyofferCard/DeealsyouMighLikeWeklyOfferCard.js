import React from 'react';

const DeealsyouMighLikeWeklyOfferCard=({service})=> {
        const { name, description, img, delprice, price } = service;

        return (
                <div
                className="shadow-lg-1 tanding_product_card_setup" style={{border:"none",}}>
              

                {/* style={{boxShadow:"px 10px 10px 10px rgba(0, 0, 0, 0.1)"}} */}
                <div className="mx-auto mt-2 " style={{ width: "250px", height: "198px", borderRadius: "10px 10px 10px 10px", flexShrink: 0, background: "#F4F4F4" }}>
                  <img
                    style={{ width: "auto", height: "auto", marginLeft: "60px" }}
                    src={img}
                    className="mt-4  "
                    alt="..."
                  />
                  <p
                    className="position-absolute"
                    style={{
      
                      height: "25px",
                      borderRadius: "10px",
                      top: 10,
                      left: 10,
                      backgroundColor: "#F85606",
                      padding: 2,
                      borderRadius: 20,
      
                    }}
                  >
                    <span className='' style={{ color: "#FFFFFF", fontSize: "12px",
                     fontFamily: "inter", fontStyle: "normal" }}> 5% OFF</span>
                  </p>  
                </div>
      
      
                <div className="card-body px-4 mt-3">
                  <p className="card-title " style={{ color: "#4F4F4F", fontSize: "14px", fontFamily: "normal", lineHeight: "20px", fontWeight: "500" }}>
                    Direct Sales by Manufactures Warm Imitation far blanket...
                  </p>
                  
               
                  <div className="ms-2 d-flex justify-content-between  mt-2" style={{ color: "#2A2A2A", fontSize: "16px", fontFamily: "inter", fontStyle: "normal", fontWeight: 600, lineHeight: "normal" }}>
                    <h6> {price}</h6>
                    <p style={{}}>
                      <del style={{ color: "#FF5530", fontSize: "12px", fontFamily: "inter", 
                      fontWeight: 600, textDecorationLine: "strikethrough", lineHeight: 'normal' }}>{delprice}</del>
                    </p>
                  </div>


         
                </div>
              </div>
      
        );
}



export default DeealsyouMighLikeWeklyOfferCard;