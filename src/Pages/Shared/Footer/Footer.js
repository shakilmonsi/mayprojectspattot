import React from 'react';
// import css link 
import "./footer.css"
// import img and logo link 
import closslogo from "../../../assets/footerAll_icon/close.svg"
//Download Our App import

import apple from "../../../assets/footerAll_icon/apple.svg"
import playstore from "../../../assets/footerAll_icon/playstore.svg"
// import Follow US logo
import facebook from "../../../assets/footerAll_icon/facebook.png"
import instagram from "../../../assets/footerAll_icon/instagram.png"
import whatsapp from "../../../assets/footerAll_icon/whatsapp.png"
import email from "../../../assets/footerAll_icon/email.png"

// footer copyRight Icon  link  import 
import visa from "../../../assets/footerAll_icon/copyRightIcon/visa.png"
import mastercard from "../../../assets/footerAll_icon/copyRightIcon/mastercard.png"
import pay from "../../../assets/footerAll_icon/copyRightIcon/pay.svg"
import applelogo from "../../../assets/footerAll_icon/copyRightIcon/applelogo.png"
import naps from "../../../assets/footerAll_icon/copyRightIcon/naps.png"
import paypal from "../../../assets/footerAll_icon/copyRightIcon/paypal.png"
import delivery from "../../../assets/footerAll_icon/copyRightIcon/cash on delivery.png"

// improt right site  logo section 

import rivew from "../../../assets/footerAll_icon/copyRightIcon/rivew.png"
import Frame from "../../../assets/footerAll_icon/copyRightIcon/Frame.svg"
import Location from "../../../assets/footerAll_icon/copyRightIcon/Location.svg"
import arbiyanCard from "../../../assets/footerAll_icon/copyRightIcon/arbiyanCard.png"
import arrowdown from "../../../assets/footerAll_icon/copyRightIcon/arrow down fill.svg"


import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='mt-3' style={{ marginLeft: 0 }}>

      <footer className="footer  " style={{
        backgroundColor: "#EA4D00"

      }}>

        <div className=" row  pading_option_setup " >
          <div className=" grid_footer_item">
            {/* Company Information   link setupb  */}
            <div className='style_to_link_text'>

              <ul>
                <h6 className='footer_title_text_style'>Company Information</h6>
                <Link to="/" className='style_to_link_text mt-3 '>About Cart24</Link>
                <br></br>
                <br></br>
                <Link to="/" className='style_to_link_text  mt-2'>Brands list</Link>
                <br></br>
                <br></br>
                <Link to="/" className='style_to_link_text  mt-2'>Site Map</Link>
                <br></br>
                <br></br>
                <Link to="/" className='style_to_link_text  mt-2'>Blog</Link>
                <br></br>
                <br></br>
                <Link to="/" className='style_to_link_text  mt-2'>Sign in</Link>
              </ul>
            </div>


            {/* 1111  */}
            {/* brands footer link setupb  */}

            <div className='style_to_link_text'>
              <ul>
                <h6 className='footer_title_text_style mt-2'>Brands</h6>

                <br />

                <Link to="/" className='style_to_link_text mt-2'>Apple</Link>
                <br></br>
                <br></br>


                <Link to="/" className='style_to_link_text  mt-2'>Samsung</Link>
                <br />
                <br />

                <Link to="/" className='style_to_link_text mt-2'>Nike</Link>

                <br />
                <br />
                <Link to="/" className='style_to_link_text mt-2'>Addidas</Link>
                <br />
                <br />
                <Link to="/" className='style_to_link_text mt-2'>Google</Link>


                <br />
                <br />
                <Link to="/" className='style_to_link_text mt-2'>Sony</Link>
                <br />
                <br />
                <Link to="/" className='style_to_link_text mt-1 d-flex'>HP</Link>

              </ul>
            </div>


            {/* catagory  footer link setupb  */}
            <div className='style_to_link_text'>
              <ul>
                <h6 className='footer_title_text_style mt-2'>Categories</h6>
                <br />

                <Link to="/" className='style_to_link_text mt-2'>Electronics</Link>
                <br></br>
                <br></br>

                <Link to="/" className='style_to_link_text  mt-2'>Smart Home</Link>
                <br />
                <br />

                <Link to="/" className='style_to_link_text mt-2'>Toys</Link>

                <br />
                <br />
                <Link to="/" className='style_to_link_text mt-2'>Fitness</Link>
                <br />
                <br />
                <Link to="/" className='style_to_link_text mt-2'>Clothings</Link>

                <br />
                <br />

                <Link to="/" className='style_to_link_text mt-2'>Smartwatches</Link>
                <br />
                <br />
                <Link to="/" className='style_to_link_text mt-1 d-flex'>Smartphones</Link>

              </ul>
            </div>


            {/* 2222  */}
            {/* market & selll link   footer setup  */}

            <div className='style_to_link_text'>
              <ul>
                <h6 className='footer_title_text_style mt-2'>Market & Sell</h6>
                <br />

                <Link to="/" className='style_to_link_text mt-3'>Start selling</Link>
                <br></br>
                <br></br>
                <Link to="/" className='style_to_link_text  mt-3'>Learnhowtosell</Link>
                <br></br>
                <br></br>

                <Link to="/" className='style_to_link_text mt-3'>Top Deals</Link>

                <br></br>
                <br></br>
                <Link to="/" className='style_to_link_text mt-3'>HomeBusiness</Link>
                <br></br>
                <br></br>
                <Link to="/" className='style_to_link_text mt-3'>Business Seller</Link>

                <br></br>
                <br></br>

                <Link to="/" className='style_to_link_text mt-2'>B2BWholesale</Link>
                <br></br>
                <br></br>
                <Link to="/" className='style_to_link_text mt-2 d-flex'>Promoter</Link>
                <br></br>

                <Link to="/" className='style_to_link_text mt-2 d-flex' >Affiliate </Link>
              </ul>
            </div>



            {/* Customer Service  link  */}
            <div className='style_to_link_text'>
              <ul>
                <h6 className='footer_title_text_style mt-2'>Customer Service</h6>

                <br />
                <Link to="/" className='style_to_link_text mt-2'>How to Order</Link>
                <br />
                <br />

                <Link to="/" className='style_to_link_text  mt-2'>TrackYourOrder</Link>
                <br />
                <br />

                <Link to="/" className='style_to_link_text mt-2'>FAQ</Link>

                <br />
                <br />
                <Link to="/" className='style_to_link_text mt-2'>Contact us</Link>
                <br />
                <br />
                <Link to="/" className='style_to_link_text mt-2'>Return/RefundPolicy</Link>


                <br />
                <br />
                <Link to="/" className='style_to_link_text mt-2'>Terms & Conditions</Link>
                <br />
                <br />
                <Link to="/" className='style_to_link_text mt-1 d-flex'>Privacy Policy</Link>
                <br />
                <br />
                <Link to="/" className='style_to_link_text mt-1 d-flex' >Help & Support</Link>
              </ul>
            </div>
            <div className='style_to_link_text'>

              <ul>
                <h6 className='footer_title_text_style mt-1' >FollowUS</h6>

                <div className='d-flex gap-3  faceBook_logo_setup' style={{ color: "#F1F1F1" }}><img src={facebook} alt=''></img>  <Link to="/" className='style_to_link_text'>facebook</Link>   </div>

                <br></br>
                <div className='d-flex gap-3  Instagram_logo_setup' style={{ color: "#F1F1F1" }}><img src={instagram} alt=''></img>  <Link to="/" className='style_to_link_text'>Instagram</Link>   </div>

                <br></br>
                <div className='d-flex gap-3  faceBook_logo_setup' style={{ color: "#F1F1F1" }}><img src={whatsapp} alt=''></img>  <Link to="/" className='style_to_link_text'>WhatsApp</Link>   </div>

                <br></br>
                <div className='d-flex gap-3  email_logo_setup' style={{ color: "#F1F1F1" }}><img src={email} alt=''></img>  <Link to="/" className='style_to_link_text'>Email</Link>   </div>




              </ul>
            </div>
            {/* 3333  */}

            {/* Download Our App   and playstore section  */}


            <div className='style_to_link_text'>

              <ul >
                <h6 className='footer_title_text_style'>Download Our App</h6>
                <p to="/" className='style_to_link_text'>Get the Cart24 mobile   app for FREE from here</p>



                <img className='apple_playstore_logo' src={apple} alt='' style={{}}></img>
                <br></br>
                <img className='apple_playstore_logo' src={playstore} alt='' style={{}}></img>


              </ul>
            </div>

            <div>
              <img src={closslogo} alt=''></img>
            </div>

          </div>






        </div>


      </footer>

      {/* copyRight section  in footer  */}
    
          <div className="footer__copyright_body py-3 pt-none" >
            <div className=" d-flex  justify-content-between footer__copyright__text" style={{ paddingRight: 30, paddingLeft: 30 }}>


              <div className='d-flex'>
                <div className='d-flex  gap-3'>
                  <p className=' copy_text_style'>© 2022 cart24.com</p>
                  <p className='all_Right_text_tyle'><span> <img style={{width:"10px",height:"10px"}} src={rivew} alt=''></img> </span> All Rights Reserved. </p>
                  <p className='all_terms_text_tyle'>Terms & Condition </p>
                  <p className='all_terms_text_tyle'>Privacy Policy </p>
                  <div className='d-flex gap-3'>
                    <div className='visa_card_body_style_setup'>
                      <img className='visa_card' style={{}} src={visa} alt=''></img>
                    </div>
                    <div className='mastercard_body_style_setup'>
                      <img className='mastercard' src={mastercard} alt=''></img>     </div>



                    <div className='d-flex pay_body_style'>
                      <img className='applelogo_style mt-1' src={applelogo} alt=''></img>
                      <img className='mt-1' src={pay} alt=''></img>
                    </div>

                    <div className='napa_body_style'>
                      <img
                        src={naps} alt=''></img>
                    </div>


                    <div>
                      <img style={{ width: "54px", height: "18px" }} src={paypal} alt=''></img>
                    </div>


                    <div className='d-flex gap-2'>
                      <img className='delivery_car  ' src={delivery} alt=''></img>
                      <p className='delivery_text_style mt-2'>Fast Express Delivery</p>
                    </div>
                  </div>
                </div>


              </div>


{/* lefisite    section in footer  */}
              <div className='gap-3 d-flex'>
                <div className='d-flex gap-2'>
                <p className='more_details_text_style'>More details</p>
                <img style={{width:"8px", height:"8px"}} src={arrowdown} alt=''></img>            
                </div>
                <div className='d-flex gap-2'>
                <p className='more_details_text_style'>SAR</p>
                <img style={{width:"8px", height:"8px"}} src={arrowdown} alt=''></img>            
                </div>
|
                <div className='d-flex gap-2'>
                <img className='mb-3' style={{width:"24px", height:"24px",}} src={Frame} alt=''></img>            

                <p className='more_details_text_style'>EN </p>
                <img style={{width:"8px", height:"8px"}} src={arrowdown} alt=''></img>            
                </div>
                
                <div className='d-flex gap-2'>
                <img style={{width:"24px", height:"24px"}} src={Location} alt=''></img>            

                <p className='more_details_text_style'>DeliverTo </p>
                </div>
                
                <div className='d-flex gap-2'>
                <img style={{width:"20px", height:"20px"}} src={arbiyanCard} alt=''></img>            

                <p className='more_details_text_style'>SaudiArabia </p>
                <img style={{width:"8px", height:"8px"}} src={arrowdown} alt=''></img>            
                </div>

              </div>
            </div>

          </div>
        </div>
    
  );
};

export default Footer;
