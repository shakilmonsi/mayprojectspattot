import React from 'react';
import "./recommendedForYousPrdoductDitilspage.css"
import RecommendedForYousPrdoductDitilspageCard from '../RecommendedForYousPrdoductDitilspageCard/RecommendedForYousPrdoductDitilspageCard';

import shos1 from "../../../../assets/TrendingDealsinElectronics/shos1.png";
import watch2 from "../../../../assets/TrendingDealsinElectronics/watch2.png";
import bag3 from "../../../../assets/TrendingDealsinElectronics/bag3.png";
import mobile from "../../../../assets/TrendingDealsinElectronics/mobile-4.png";
import watch from "../../../../assets/TrendingDealsinElectronics/watch-5.png";
import shos6 from "../../../../assets/TrendingDealsinElectronics/shos6.png";

import { Link } from 'react-router-dom';

const RecommendedForYousPrdoductDitilspage = () => {
        const servicesData = [
                {
                        id: 1,
                        name: 'Fluoride Treatment',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: shos1,
                        price: 8750.00,
                        delprice: 3910.00,

                },
                {
                        id: 2,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: watch2,
                        price: 8750.00,
                        delprice: 3910.00,
                },
                {
                        id: 3,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: bag3,
                        price: 8750.00,
                        delprice: 3310.00,
                },
                {
                        id: 4,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: mobile,
                        parseIntrice: 8750.00,
                        delprice: 3910.500,
                },
                {
                        id: 5,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: watch,
                        price: 8750.00,
                        delprice: 9310.00,


                },

                {
                        id: 6,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: shos6,
                        price: 8750.00,
                        delprice: 9310.00,


                },
        ]
        return (
               
                        <div className=' trending_dealsin_electronices' style={{ backgroundColor: "#F5F7FB" ,marginTop:"47px"}}>
                                <div className='d-flex justify-content-between'style={{padding:"20px"}} >
                                        <h4 style={{ color: "#000", fontSize: "22px", fontFamily: "inter", fontWeight: 500, lineHeight: "normal" }}>Recommended For You</h4>
                                        <Link to="/" className='' style={{ color: "#000", fontFamily: "inter", fontSize: "18px", fontWeight: 500, fontStyle: "normal", lineHeight: "normal" }}>View All</Link>

                                </div>


                               <div className='row mt-4'>
                                <div  className='gap-3 
                                  TrendingDealsInElectronic_product_grid_setup m ms-2'>
                                {
                                        servicesData.map(servic => <RecommendedForYousPrdoductDitilspageCard
                                                key={servic.id}
                                                service={servic}
                                        ></RecommendedForYousPrdoductDitilspageCard>)
                                }


                                </div>
                               </div>

                                
                        </div>


             
        );
}



export default RecommendedForYousPrdoductDitilspage;