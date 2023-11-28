import React from 'react';
 import "./SpecialSaleOfferRightSiteProductDitilsCard.css"
 import shopingcardicon from "../../../../../../assets/shopingcardiconbutton/shopingicon.svg"
 const SpecialSaleOfferRightSiteProductDitilsCard = ({ service }) => {
         const { name, verifide,thredot,offers, description, img, price, delprice 
                  ,hardicon,redingicon,widthredingicon ,grayverifyde} = service;
   
                  //setup complte
         return (
        
 
               <div
                 className=" card shadow-sm"
                 style={{ width: "266px", height: "407px", flexShrink: 0, borderRadius:
                  "10px", border: "none", backgroundColor: "#FFF", boxShadow: "0.1px 0.1px 0.1px 0.1px rgba(0, 0, 0, 0.1)" }}
               >
                 {/* style={{boxShadow:"px 10px 10px 10px rgba(0, 0, 0, 0.1)"}} */}
                 <div className="mx-auto " style={{ width: "250px", height: "198px", 
                 borderRadius: "10px 10px 10px 10px", flexShrink: 0, background: "#F4F4F4" }}>
                   <img
                     style={{ width: "auto", height: "auto", marginLeft: "45px" }}
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
                     <span className='' style={{ color: "#FFFFFF", fontSize: "12px", fontFamily: 
                     "inter", fontStyle: "normal" }}> {offers}% OFF</span>
                   </p>
                   <div
                     className="position-absolute"
                     style={{
       
       
                       flexShrink: 0,
       
                       top: 10,
                       right: 20,
                       borderRadius: "50%",
                       paddingLeft: 5,
                       paddingRight: 5,
       
                     }}
                   >
                     <img src={hardicon} style={{ width: "26px", height: "26px", color: "#FFFFFF" }} alt="" />
                   </div>
                   <div
                     className="position-absolute mt-1 "
                     style={{
       
                       top: 35,
                       right: 20,
                       borderRadius: "50%",
                       paddingLeft: 5,
                       paddingRight: 5,
       
                     }}
                   >
                     <img
                       src={thredot}
                       style={{ width: "26px", height: "26px", color: "#FFFFFF" }}
                       alt=""
                     />
                   </div>
                 </div>
       
       
                 <div className="card-body">
                   <p className="card-title " style={{ color: "#4F4F4F", fontSize: "14px", fontFamily: "normal", lineHeight: "20px", fontWeight: "500" }}>
                     {description}.....
                   </p>
                   <div className="d-flex justify-content-between me-2 ms-2">
       
                     <div className='gap-1'>
                       <img style={{ color: "#F08200", width: "16.08px", height: "16px", flexShrink: 0 }} src={redingicon} alt=''></img>
                       <img style={{ color: "#F08200", width: "16.08px", height: "16px", flexShrink: 0 }} src={redingicon} alt=''></img>
                       <img style={{ color: "#F08200", width: "16.08px", height: "16px", flexShrink: 0 }} src={redingicon} alt=''></img>
                       <img style={{ color: "#F08200", width: "16.08px", height: "16px", flexShrink: 0 }} src={redingicon} alt=''></img>
                       <img style={{ color: "#C7511F33", width: "16.08px", height: "16px", flexShrink: 0 }} src={widthredingicon} alt=''></img>
                       <span style={{ fontSize: "12px", color: "#717171", fontFamily: "inter", fontWeight: 500, lineHeight: "normal" }}> (169)</span>
                     </div>
                     <div>
       
                     </div>
                     <div>
                       <img
                         src={ verifide}
                         style={{ color: "#FFCC3A", }}
                         width="20px"
                         height="20px"
                         alt=""
                       />{" "}
                       <span style={{ color: "#FFCC3A", fontSize: "12px", fontFamily: "inter", fontWeight: 600, lineHeight: "normal" }}>1000</span>
                     </div>
                   </div>
                   <div className="d-flex gap-2  ms-2  mt-2 " style={{ fontSize: "12px", fontFamily: "inter", fontStyle: "normal", lineHeight: "normal", color: "#717171" }}>
                     <p>Sold by: </p>
                     <img
                       className=""
                       src={grayverifyde}
                       style={{ color: "#717171", width: "16px", height: "16px" }}
       
                       alt=""
                     />
                     <p style={{ fontSize: "12px", fontFamily: "inter", fontStyle: "normal", lineHeight: "normal", color: "#717171" }}>Mr. Mohammad</p>
                   </div>
                   <div className="ms-2 d-flex justify-content-between " style={{ color: "#2A2A2A", fontSize: "16px", fontFamily: "inter", fontStyle: "normal", fontWeight: 600, lineHeight: "normal" }}>
                     <h6>BDT {price}</h6>
                     <p style={{}}>
                       <del style={{ color: "#FF5530", fontSize: "12px", 
                        fontFamily: "inter", fontWeight: 600, textDecorationLine: "strikethrough", 
                        lineHeight: 'normal' }}>{delprice}</del>
                     </p>
                   </div>
       
       
                   <div className=' border'>
                     <button className="btn btn-dark 
                     " style={{
                         width: "235px", height: "40px", borderRadius: "5px"
                       }}>
                       <img src={shopingcardicon} style={{ width: "19.325px", height: "18.329px", color: "#FFFFFF" }}
                         alt="" /> <span style={{ fontFamily: "inter", fontStyle: "normal", lineHeight: "normal", fontWeight: 500, fontSize: "14px", color: "#FFFFFF" }}> ADD TO CART</span>
                     </button>
                   </div>
      
                 </div>
               </div>
        
       
              
         );
 }
export default SpecialSaleOfferRightSiteProductDitilsCard;