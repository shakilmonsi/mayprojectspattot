import React from 'react';
import { Link } from 'react-router-dom';
// css link   import  
import "./flashsales.css"

// import  logo  link 
import flashsalelogo from "../../../../../../assets/flash_sale/flashsalelogo.svg"

import deko from "../../../../../../assets/flash_sale/1.png";
import tata from "../../../../../../assets/flash_sale/tata2.png";
import fationshop3 from "../../../../../../assets/flash_sale/fationshop3.png";
import under4 from "../../../../../../assets/flash_sale/under4.png";
import marder5 from "../../../../../../assets/flash_sale/marder5.png";
import jori6 from "../../../../../../assets/flash_sale/jori6.png";
import FlashsaleCard from '../FlashSaleCard/FlashsaleCard';

const FlashSales = () => {
        const flashsalesData = [
                {
                        id: 1,
                        name: 'Fluoride Treatment',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: deko,
                        price: 8750.00,
                        delprice: 3910.00,
                        offer:"50% off"

                },
                {
                        id: 2,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: tata,
                        price: 8750.00,
                        delprice: 3910.00,
                        offer:"Best Seller"
                },
                {
                        id: 3,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: fationshop3,
                        price: "BDT 8750.00",
                        delprice: 3310.00,
                        offer:"50% off"

                },
                {
                        id: 4,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: under4,
                        price: 8750.00,
                        delprice: 3910.00,
                        offer:"Best Seller"
                },
                {
                        id: 5,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: marder5,
                        price: "BDT 8750.00",
                        delprice: 3310.00,
                        offer:"50% off"
                },
                {
                        id: 6,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: jori6,
                        price: "BDT 8750.00",
                        delprice: 3310.00,
                        offer:"50% off"
                },

        ];
//   need a timig  dinymik  kore  timing korte  nicer   timingData   API ti  use korte paren

        //  const  timingData =[
        //         {
        //           id:1,
        //           timenumber:10,
        //           timeNme:"Days",

        //         },
        //         {
        //           id:1,
        //           timenumber:15,
        //           timeNme:"Hours",

        //         },
        //         {
        //           id:1,
        //           timenumber:21,
        //           timeNme:"Min",

        //         },
        //         {
        //           id:1,
        //           timenumber:45,
        //           timeNme:"Sec",

        //         },
        //  ]

        return (
                <section className='' style={{background: "#F5F7FB", padding:"40px",marginTop:"47px"}}>


                        <div className='d-flex justify-content-between mt-3'>
                                 
                                 <div className='d-flex gap-4'>

                                <div  className='d-flex gap-2'>

                                        {/* flashlogo setup  */}
                                        <div className='d-flex ms-4 '>
                                        <img src={flashsalelogo} alt='' style={{width:"26px", height:"45px", flexShrink:0, color:"#F85606"}}></img>
                                        <h6 className='plashsale_text_style_setup'>Flash 𝒮ale</h6>
                                        </div>

                                          {/* timing  setup  */}
                                        <div className='d-flex gap-2 ' style={{marginTop:-18,color:""}}>


                                          <div  className='plashsale_days_in_src_text_style'>
                                                         <h6 className='m-2   ms-3'><span className='text_code_number ' 
                                                >10</span> <br></br><span  className='text_titele_style_dignit_text' 
                                                >Days</span> </h6>

                                               </div><h5 className='mt-3 colon_style'>:</h5>
                                          <div  className='plashsale_days_in_src_text_style'>
                                                         <h6 className='m-2   ms-3'><span className='text_code_number ' 
                                                >15</span> <br></br><span  className='text_titele_style_dignit_text' 
                                                >Hours</span> </h6>

                                               </div><h5 className='mt-3  colon_style'>:</h5>
                                          <div  className='plashsale_days_in_src_text_style'>
                                                         <h6 className='m-2   ms-3'><span className='text_code_number ' 
                                                >21</span> <br></br><span  className='text_titele_style_dignit_text' 
                                                >Min</span> </h6>

                                               </div><h5 className='mt-3  colon_style'>:</h5>
                                          <div  className='plashsale_days_in_src_text_style'>
                                                         <h6 className='m-2   ms-3'><span className='text_code_number ' 
                                                >45</span> <br></br><span  className='text_titele_style_dignit_text' 
                                                >Sec</span> </h6>

                                               </div>


                                                </div>    
                             
                             
                             
                             
                                </div>
                               


                                <div className='d-flex ' style={{gap:"40px",  marginLeft:185}}>
                                        <Link to="/" className='electronics_text_style'> Electronics</Link>
                                        <Link to="/" className='colthing_sports_tous_text_style'> Clothing’s</Link>
                                        <Link to="/" className='colthing_sports_tous_text_style'> Sports</Link>
                                        <Link to="/" className='colthing_sports_tous_text_style'> Toys</Link>
                       
                                </div>

                                 </div>
                                 <div>
                                 <Link to="/" className='' style={{ color: "#000", fontFamily: "inter", fontSize: "18px", fontWeight: 500, fontStyle: "normal", lineHeight: "normal" }}>View All</Link>

                                 </div>
                          



                        </div>
                        <div className='row mt-4'>
                        <div className=' grid_flashsalesData_grid_setup ms-4 gap-4 '>
                        {
        flashsalesData.map(servic => <FlashsaleCard
                key={servic.id}
                service={servic}
        ></FlashsaleCard>)
        
}

                        </div>
                        </div>

        



                </section>
        );
}

export default FlashSales;