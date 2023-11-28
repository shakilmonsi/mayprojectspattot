import React from 'react';

function ProductCardDign(props) {
        return (
                <div>
                           <div
          className=" card shadow-sm"
          style={{ width: "266px", height: "407px", flexShrink: 0, borderRadius: "10px", border: "none", backgroundColor: "#FFF", boxShadow: "0.1px 0.1px 0.1px 0.1px rgba(0, 0, 0, 0.1)" }}
        >
          {/* style={{boxShadow:"px 10px 10px 10px rgba(0, 0, 0, 0.1)"}} */}
          <div className="mx-auto " style={{ width: "250px", height: "198px", borderRadius: "10px 10px 10px 10px", flexShrink: 0, background: "#F4F4F4" }}>
            <img
              style={{ width: "auto", height: "auto", marginLeft: "60px" }}
              src={shos}
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
              <span className='' style={{ color: "#FFFFFF", fontSize: "12px", fontFamily: "inter", fontStyle: "normal" }}> 5% OFF</span>
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
              Direct Sales by Manufactures Warm Imitation far blanket...
            </p>
            <div className="d-flex justify-content-between me-2 ms-2">

              <div className='gap-1'>
                <img style={{ color: "#F08200", width: "16.08px", height: "16px", flexShrink: 0 }} src={startreding} alt=''></img>
                <img style={{ color: "#F08200", width: "16.08px", height: "16px", flexShrink: 0 }} src={startreding} alt=''></img>
                <img style={{ color: "#F08200", width: "16.08px", height: "16px", flexShrink: 0 }} src={startreding} alt=''></img>
                <img style={{ color: "#F08200", width: "16.08px", height: "16px", flexShrink: 0 }} src={startreding} alt=''></img>
                <img style={{ color: "#C7511F33", width: "16.08px", height: "16px", flexShrink: 0 }} src={widthstartreding} alt=''></img>
                <span style={{ fontSize: "12px", color: "#717171", fontFamily: "inter", fontWeight: 500, lineHeight: "normal" }}> (169)</span>
              </div>
              <div>

              </div>
              <div>
                <img
                  src={verified}
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
              <h6>BDT 8750.00</h6>
              <p style={{}}>
                <del style={{ color: "#FF5530", fontSize: "12px", fontFamily: "inter", fontWeight: 600, textDecorationLine: "strikethrough", lineHeight: 'normal' }}>9693.00</del>
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



{/* promoter users  card complet digin ok  code < */}
<div >
 
 <div className='mt-5  ms-4 "'>
 <div className='d-flex justify-content-between'>
   <h4 style={{ color: "#000", fontSize: "22px", fontFamily: "inter", fontWeight: 500, lineHeight: "normal" }}>Trending Deals In Electronics</h4>
   <Link to="/" className='' style={{ color: "#000", fontFamily: "inter", fontSize: "18px", fontWeight: 500, fontStyle: "normal", lineHeight: "normal" }}>View All</Link>

 </div>
   <div className='row '>
     <div className=' d-flex  grid_colams gap-5'>

       <div className="card  shadow-lg " style={{ border: "none", width: "164px", height: "188px", flexShrink: 0 }}>

         <img src={fluoride} style={{ marginTop: "10px", height: " 17.727px", borderRadius: "63.818px", width: "63.818px", height: "63.818px", flexShrink: 0 }} className="card-img-top mx-auto" alt="..." />
         <i
           className="" style={{ borderRadius: "50%", backgroundColor: "white", padding: 5, color: "#FFFFFF" }}

         >   <img className='position-absolute' src={staverifiedlogo} alt='' style={{
           top: -6,
           right: 40,

           flexShrink: 0,
         }}></img>   </i>




         <div className="ms-4 ">


           <div className='d-flex gap-1'>
             <img className='setu' src={promotericon} style={{ marginTop: 11, width: "12px", height: "12px", flexShrink: 0 }} alt=''></img>
             <h5 className='mt-2' style={{ fontSize: "14px", color: "#2A2A2A", fontFamily: "Inter", lineHeight: "normal", fontStyle: "normal" }}>Shahadat Hossain</h5>
           </div>


           <div className='d-flex gap-2'>
             <div>
               <img src={starretting} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>
               <img src={starretting} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>
               <img src={starretting} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>
               <img src={starretting} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>
               <img src={withcolor} alt='' style={{ width: "10px", height: "10x", backgroundColor: "" }}></img>
               <span className='mx-auto' style={{
                 fontSize: "13px", fontWeight: 500,
                 fontStyle: "normal", lineHeight: "normal", color: "#6A6969", flexShrink: 0
               }}>  4.5</span>
             </div>

           </div>
           <div className='d-flex gap-2 '>
             <div className='d-flex gap-1 mt-1'>
               <img className='mt-1' src={usericon} alt='' style={{
                 width: "9px",
                 height: "11px", color: "#424242", flexShrink: 0
               }}></img>
               <p className=' ' style={{ widows: "auto", fontWeight: 500, fontSize: "13px", color: "#868585" }}>13.3k</p>

             </div >
             <div className='' style={{ marginBottom: "10px", }} >
               <button className=' rounded mb-3' style={{
                 width: "61px", height: "24px",
                 backgroundColor: "#424242"
               }}>
                 <span className='' style={{ textAlign: "center", color: '#FFFFFF', fontSize: "10px", }}>Follow</span>
               </button>         </div>

           </div>

         </div>
       </div>

     </div>



   </div>

 </div>

</div>
{/* promoter users  card complet digin ok  code  >*/}

 {/* exploreOurTopHomBusiness home seller setup card ok  */}
 <div >

<div className='mt-5  ms-4 "'>
  <div className='d-flex justify-content-between mt-2'>
    <h4 style={{ color: "#000", fontSize: "22px", fontFamily: "inter", fontWeight: 500, lineHeight: "normal" }}>Explore Our Top Home Business</h4>
    <Link to="/" className='' style={{ color: "#000", fontFamily: "inter", fontSize: "18px", fontWeight: 500, fontStyle: "normal", lineHeight: "normal" }}>View All</Link>

  </div>
  <div className='row '>
    <div className=' d-flex  grid_colams gap-5'>

      <div className="card  shadow-lg " style={{ border: "none", width: "164px", height: "188px", flexShrink: 0 }}>

        <img src={fluoride} style={{ marginTop: "10px", height: " 17.727px", borderRadius: "63.818px", width: "63.818px", height: "63.818px", flexShrink: 0 }} className="card-img-top mx-auto" alt="..." />
        <i
          className="" style={{ borderRadius: "50%", backgroundColor: "white", padding: 5, color: "#FFFFFF" }}

        >   <img className='position-absolute' src={staverifiedlogo} alt='' style={{
          top: -6,
          right: 40,

          flexShrink: 0,
        }}></img>   </i>




        <div className="ms-4 ">


          <div className='d-flex gap-1'>
            <img className='setu' src={promotericon} style={{ marginTop: 11, width: "12px", height: "12px", flexShrink: 0 }} alt=''></img>
            <h5 className='mt-2' style={{ fontSize: "14px", color: "#2A2A2A", fontFamily: "Inter", lineHeight: "normal", fontStyle: "normal" }}>Shahadat Hossain</h5>
          </div>


          <div className='d-flex gap-2'>
            <div>
              <img src={starretting} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>
              <img src={starretting} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>
              <img src={starretting} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>
              <img src={starretting} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>
              <img src={withcolor} alt='' style={{ width: "10px", height: "10x", backgroundColor: "" }}></img>
              <span className='mx-auto' style={{
                fontSize: "13px", fontWeight: 500,
                fontStyle: "normal", lineHeight: "normal", color: "#6A6969", flexShrink: 0
              }}>  4.5</span>
            </div>

          </div>
          <div className='d-flex gap-2 '>
            <div className='d-flex gap-1 mt-1'>
              <img className='mt-1' src={usericon} alt='' style={{
                width: "9px",
                height: "11px", color: "#424242", flexShrink: 0
              }}></img>
              <p className=' ' style={{ widows: "auto", fontWeight: 500, fontSize: "13px", color: "#868585" }}>13.3k</p>

            </div >
            <div className='' style={{ marginBottom: "10px", }} >
              <button className=' rounded mb-3' style={{
                width: "61px", height: "24px",
                backgroundColor: "#424242"
              }}>
                <span className='' style={{ textAlign: "center", color: '#FFFFFF', fontSize: "10px", }}>Follow</span>
              </button>         </div>

          </div>

        </div>
      </div>

    </div>



  </div>

</div>

</div>
 {/* exploreOurTopHomBusiness home seller setup card ok  */}



          </div>
        </div>

                        
                </div>
        );
}

export default ProductCardDign;