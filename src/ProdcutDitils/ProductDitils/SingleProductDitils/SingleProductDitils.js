import React from 'react';
import "./SingleProductDitils.css";
import product1 from "../../../assets/productDitils/product/product1.png"
import product2 from "../../../assets/productDitils/product/product2.png"
import product3 from "../../../assets/productDitils/product/product3.png"
import product4 from "../../../assets/productDitils/product/product4.png"
import mainproduct from "../../../assets/productDitils/product/mainproduct.png"
// logo import  
import reding from "../../../assets/iconreting/rating.svg"
import withcolerrating from "../../../assets/iconreting/withcolerrating.svg"
// sher logo import 
import facebook from "../../../assets/productDitils/productrightsitelogo/Facebook.svg"
import Twitter from "../../../assets/productDitils/productrightsitelogo/Twitter.svg"
import pinterest from "../../../assets/productDitils/productrightsitelogo/pinterest.svg"

//  testing logo and delivary logo and redun 
 import ttrustedshippig1 from "../../../assets/productDitils/productrightsitelogo/testingdelivaryprice/trustedshippig1.png"
 import watch2 from "../../../assets/productDitils/productrightsitelogo/testingdelivaryprice/watch2.png"
 import freereturns from "../../../assets/productDitils/productrightsitelogo/testingdelivaryprice/freereturns.png"

// sole by : logo import 
import promoter from "../../../assets/productDitils/sholdbyicon/promoter.png"
import Medal from "../../../assets/productDitils/sholdbyicon/Medal 5.svg"
import rating from "../../../assets/productDitils/sholdbyicon/rating.svg"
import users from "../../../assets/productDitils/sholdbyicon/users.svg"
import masses from "../../../assets/productDitils/sholdbyicon/masses.svg"
// add to card logo section 
import minus from "../../../assets/productDitils/addCardlogo/minus.svg"
import add from "../../../assets/productDitils/addCardlogo/add.svg"
import compare from "../../../assets/productDitils/addCardlogo/compare.svg"
import love from "../../../assets/productDitils/addCardlogo/love.png"




import { Link } from 'react-router-dom';


 const SingleProductDitils = () => {


    return (
       <div className=" shodow-none mx-auto mt-4" >
  <div className="row g-4">
    <div className="col-lg-7 ">
    <div className='d-flex  '>
    <div className='mx-auto'>
    <div className='site_ber_galary_style  ' style={{backgroundColor:"#F5F7FB"}}> <img  src= {product1}className="img-fluid mt-4 ms-4" alt="..." /></div>
  <br></br>
    <div className='site_ber_galary_style'> <img src={product2} className="img-fluid  mt-4 ms-4" alt="..." /></div>
   
    <br></br>
     <div className='site_ber_galary_style'> <img src={product3} className="img-fluid  mt-4 ms-4" alt="..." /></div>
     <br></br>
    <div className='site_ber_galary_style'> <img src={product4} className="img-fluid  mt-4 ms-4" alt="..." /></div>


        </div>
        <div className='setup_main_product_style'>
        <img src={mainproduct} className="img-fluid " alt="..." style={{padding:20,marginTop:70}}/>
        </div>
    </div>
     
    </div>



 {/* product ditils  site setup and  style  */}
    <div className="col-lg-4">
      <div className="body">
        <div>
        <h6 className='HOTSALE'><span className='hotsale_text_style'>HOTSALE</span></h6>
      <p>Brand: Sony</p>
        <h5 className="company_ditils_text_style">
        Sony Plus 43 Inch Android Smart Wifi Hd Led Tv 4k Supported
Ram 2 gb Rom 16 Gb
        </h5>
        </div>


        {/* // Reviews and  sher setup  */}

    <div className='d-flex gap-4'>
        <div className='d-flex'>
     <p className='modul_text_style'>Model: OlED42C2PSA</p>
        </div><span style={{marginTop:-6}}>|</span> 
        <div className='d-flex gap-1'>
            <img style={{color:"#F08200",width:"11.579px",height:"11.848px",flexShrink:0}} src={reding} alt=''></img>
            <img style={{color:"#F08200",width:"11.579px",height:"11.848px",flexShrink:0}} src={reding} alt=''></img>
            <img style={{color:"#F08200",width:"11.579px",height:"11.848px",flexShrink:0}} src={reding} alt=''></img>
            <img style={{color:"#F08200",width:"11.579px",height:"11.848px",flexShrink:0}} src={reding} alt=''></img>
            
            <img style={{width:"11.579px",height:"11.848px",flexShrink:0}} src={withcolerrating} alt=''></img>
            <span className='reviews_text_style'> 4.5 (2130 reviews)</span>
    
        </div><span style={{marginTop:-6}}>|</span> 
        <div className='d-flex gap-3'>
     <span className='share_text_style '>Share:</span>
     <img style={{color:"#717171",width:"20px",height:"20px",flexShrink:0}} src={facebook} alt=''></img>
            <img style={{color:"#717171",width:"20px",height:"20px",flexShrink:0}} src={Twitter} alt=''></img>
            <img style={{color:"#717171",width:"20px",height:"20px",flexShrink:0}} src={pinterest} alt=''></img>
            

        </div>

    </div>

    {/* Highlights   style and setup   */}
    <div className='highights_body_style mt-2'>
      <h5 className='highlights_text_style mt-1'>Highlights</h5>
      <li className='highlights_list_text_style'>A9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
      <li className='highlights_list_text_style'>Hands-free Voice Control, Always Ready</li>
      <li className='highlights_list_text_style'>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
    </div>

{/* / BDT  5321.00  section setup   */}
<div>
 {/* price and   items  styel setup ////// */}
<div className='d-flex justify-content-center mt-4 gap-4'>
  <div>
<h4 className='bdt_number_text_style gap-2'><span className='price_style gap-2'>Price: 
 </span> BDT  5321.00<span className='including_text-style'>  including VAT</span></h4>
  </div>
  <div>
    <h5 className='MinQuantityitems_text-style'>Min Quantity : <span className='items-text_setup'>10 items</span></h5>

  </div>
  <div className='Availability_items_setyp_style d-flex' style={{marginTop:-10}}>

<h6 style={{margin:14, justifyContent:"center"}} className='availability_text'>Availability: <span className='threti_items_style'>322 items</span></h6>



  </div>
</div>

{/* // complet Delivery an return section  */}

<div className='d-flex mt-4 ms-4  grid_imtems-setup' style={{gap:80}}>

  <div className='d-flex ' style={{alignItems:"center"}}>
   <div className='img_pading_setup'> <img src={ttrustedshippig1} alt=''></img></div>
    <span className='trusted_fast_free'>Trusted Shipping</span>

  </div>
  <div className='d-flex ' style={{alignItems:"center"}}>
   <div className='img_pading_setup'> <img src={watch2} alt=''></img></div>
    <span className='trusted_fast_free'>Fast Delivery</span>

  </div>
  
  <div className='d-flex' style={{alignItems:"center"}}>
   <div className='img_pading_setup'> <img src={freereturns} alt=''></img></div>
    <span className='trusted_fast_free'>Free Returns</span>

  </div>
  
</div>
{/* //setup sold by  section o k  */}

<div className='sold_full_body_style'style={{marginTop:"36px"}}>
  <p>Sold:</p>
  <div className='grid_solt_by_imtems'>
<div className='d-flex gap-2' style={{alignItems:"center"}}>
  <img className='promoter_logo_style_setup' src={promoter} alt=''></img>
  <span className='paromoter_title_style '>MohammadRahman</span>
  <img style={{width:"12.003px",height:"18px"}} src={Medal} alt=''></img>
</div>

 {/* product reding and user  follow setup */}
<div className='d-flex gap-2' style={{alignItems:"center"}}>
  <div className='user_logo_style_setup d-flex gap-1'>
  <img style={{width:"12px", height:"12px"}} src={rating} alt=''></img>
  <span className='text_reding_style'> 4.3</span>
  </div>
  <div>
     
  <div className='d-flex'>
  <img style={{width:"14px", height:"14px",color:"#2A2A2A"}} src={users} alt=''></img>
  <span className='text_reding_style'> 12.5k</span>
  </div>

  
  
  </div>
  <div>
    <button className='button_body-setup'><span className='button_text_setup'>follow</span></button>
  </div>
</div>





<div className='d-flex gap-4' style={{alignItems:"center"}}>
  <div className='chat_now_body d-flex' style={{alignItems:"center"}}>
  <img style={{width:"16px", height:"16px"}} src={masses} alt=''></img>
  <span className='text_style'> Chat now</span>
  </div>

     
  <div className=''>
    <Link  className='text_style' to="/">Visit Shop</Link>
 
  </div>


 
</div>




  </div>
</div>


{/* / setup incrid and dricrid section ok  */}

<div className='incrid_dricrid_section_style  gap-3'>
<div className='cicrid_style d-flex' style={{alignItems:"center"}}>
   <img style={{width:"14px"}} src={minus} alt=''></img>
<span className='number_style'>10</span>
   <img style={{width:"14px",height:"14px"}} src={add} alt=''></img>
</div>

<button className='style_button align-items-center border-0'> <p className=' add_to_card_text_style'style={{ marginTop:"24px"}} >Add to Cart</p></button>

<div className='hard_icon_style align-items-center gap-2 '>
  <img style={{width:"20px", height:"20px"}} src={love} alt=''></img>
  <span className='wishlist'>Wishlist</span>
</div>


<div className='compare_icon_style align-items-center gap-2 '>
  <img style={{width:"14.286px", height:"20px"}}  src={compare} alt=''></img>
  <span className='wishlist'>Addtocompare</span>
</div>

</div>


</div>
      </div>
    </div>
  </div>
</div>

    );
};

export default SingleProductDitils;