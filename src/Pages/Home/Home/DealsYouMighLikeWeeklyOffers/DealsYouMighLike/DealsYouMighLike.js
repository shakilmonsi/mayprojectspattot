import React from 'react';
import "./dealyoumighlike.css"
import { Link } from 'react-router-dom';
import shart1 from "../../../../../assets/DealsYouMightLike/shart1.png";
import bag from "../../../../../assets/DealsYouMightLike/bag-3.png";
import tishit from "../../../../../assets/DealsYouMightLike/ti-shit-2.png";
import ject from "../../../../../assets/DealsYouMightLike/ject-4.png";
import herephone5 from "../../../../../assets/DealsYouMightLike/herephone5.png";
import watch from "../../../../../assets/DealsYouMightLike/watch-6.png";
import DeealsyouMighLikeWeklyOfferCard from '../dealsyouMighLikeWeeklyofferCard/DeealsyouMighLikeWeklyOfferCard';
const DealsYouMighLike = () => {
        const servicesData = [
                {
                        id: 1,
                        name: 'Fluoride Treatment',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: shart1,
                        price: 8750.00,
                        delprice: 3910.00,

                },
                {
                        id: 2,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: tishit,
                        price: 8750.00,
                        delprice: 3910.00,
                },
                {
                        id: 3,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: bag,
                        price: "BDT 8750.00",
                        delprice: 3310.00,
                },
                {
                        id: 4,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: ject,
                        price: 8750.00,
                        delprice: 3910.00,
                },
                {
                        id: 5,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: herephone5,
                        price: "BDT 8750.00",
                        delprice: 3310.00,
                },
                {
                        id: 6,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: watch,
                        price: "BDT 8750.00",
                        delprice: 3310.00,
                },

        ]


        return (
                <div className='py-4' style={{backgroundColor:"#F5F7FB", }}>



                        <div className='d-flex  justify-content-between' style={{padding:"40px"}}>
                                <h4 style={{
                                        color: "#000", fontSize: "22px", fontFamily: "inter",
                                        fontWeight: 500, lineHeight: "normal"
                                }}>Deals You Might Like</h4>
                                <Link to="/" className='' style={{ color: "#000", fontFamily: "inter", fontSize: "18px", fontWeight: 500, fontStyle: "normal", lineHeight: "normal" }}>View All</Link>

                        </div>
                        <div className='row ' >


                                <div className="d-flex gap-3 flex-wrap" style={{marginLeft:"34px"}}>
                                        {
                                                servicesData.map(servic => <DeealsyouMighLikeWeklyOfferCard
                                                        key={servic.id}
                                                        service={servic}
                                                ></DeealsyouMighLikeWeklyOfferCard>)
                                        }


                                </div>
                        </div>











                </div>
        );
}

export default DealsYouMighLike;