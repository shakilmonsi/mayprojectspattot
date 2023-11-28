import React from "react";
import  "./ExploreOuropBusinessSellers.css"
import ammazzon1 from "../../../../../assets/ExploreOurTopBusinessSeller/ammazzon1.jpg";
import google from "../../../../../assets/ExploreOurTopBusinessSeller/google2.jpg";
import ebay from "../../../../../assets/ExploreOurTopBusinessSeller/ebay3.jpg";
import allibaba from "../../../../../assets/ExploreOurTopBusinessSeller/allibaba4.jpg";
import nokia from "../../../../../assets/ExploreOurTopBusinessSeller/nokia5.jpg";
import none from "../../../../../assets/ExploreOurTopBusinessSeller/noon6.jpg";
import apple from "../../../../../assets/ExploreOurTopBusinessSeller/apple7.jpg";
import daraz from "../../../../../assets/ExploreOurTopBusinessSeller/daraz8.jpg";
import addidas from "../../../../../assets/ExploreOurTopBusinessSeller/addidas9.jpg";


import usericon from "../../../../../assets/usersicon/user.svg"
import starretting from "../../../../../assets/iconreting/rating.svg";
import withcolorretting from "../../../../../assets/iconreting/withcolerrating.svg";
import staverifiedlogo from "../../../../../assets/companyVairpideIcon/verified.svg"
import vector from "../../../../../assets/vector/Vector.svg"
import { Link } from 'react-router-dom';
import ExploreOuropBusinessSeller from "../ExploreOuropBusinesSeller/ExploreOuropBusinessSeller";


const ExploreOuropBusinessSellers = () => {

        const exploreOuropBusinessSellersData = [
                {
                        id: 1,
                        name: "Ammazzan",
                        bessimg: ammazzon1,
                        vector: vector,
                        staverifiedlogo: staverifiedlogo,
                        starretting: starretting,
                        usericon: usericon,
                        withcolorretting: withcolorretting,

                },
                {
                        id: 2,
                        name: "Google",
                        bessimg: google,
                        vector: vector,
                        staverifiedlogo: staverifiedlogo,
                        starretting: starretting,
                        usericon: usericon,
                        withcolorretting: withcolorretting,

                },
                {
                        id: 3,
                        name: "Ebay",
                        bessimg: ebay,
                        vector: vector,
                        staverifiedlogo: staverifiedlogo,
                        starretting: starretting,
                        usericon: usericon,
                        withcolorretting: withcolorretting,

                },
                {
                        id: 4,
                        name: "Allibaba",
                        bessimg: allibaba,
                        vector: vector,
                        staverifiedlogo: staverifiedlogo,
                        starretting: starretting,
                        usericon: usericon,
                        withcolorretting: withcolorretting,

                },
                {
                        id: 5,
                        name: "Nokia",
                        bessimg: nokia,
                        vector: vector,
                        staverifiedlogo: staverifiedlogo,
                        starretting: starretting,
                        usericon: usericon,
                        withcolorretting: withcolorretting,

                },
                {
                        id: 6,
                        name: "Non",
                        bessimg: none,
                        vector: vector,
                        staverifiedlogo: staverifiedlogo,
                        starretting: starretting,
                        usericon: usericon,
                        withcolorretting: withcolorretting,

                },
                {
                        id: 7,
                        name: "Apple",
                        bessimg: apple,
                        vector: vector,
                        staverifiedlogo: staverifiedlogo,
                        starretting: starretting,
                        usericon: usericon,
                        withcolorretting: withcolorretting,

                },
                {
                        id: 8,
                        name: "Daraz",
                        bessimg: daraz,
                        vector: vector,
                        staverifiedlogo: staverifiedlogo,
                        starretting: starretting,
                        usericon: usericon,
                        withcolorretting: withcolorretting,

                },

                {
                        id: 9,
                        name: "Addidas",
                        bessimg: addidas,
                        vector: vector,
                        staverifiedlogo: staverifiedlogo,
                        starretting: starretting,
                        usericon: usericon,
                        withcolorretting: withcolorretting,

                },



        ];

//setup complet 
        return (

                <div className='ms-4' style={{backgroundColor:"#FFFFFF",marginTop:"47px",padding:"35px"}}>

                        <div className='d-flex justify-content-between'>
                                <h4 style={{
                                        color: "#000", fontSize: "22px", fontFamily: "inter",
                                        fontWeight: 500, lineHeight: "normal"
                                }}>Explore Our Top Business Seller</h4>
                                <Link to="/" className='' style={{ color: "#000", fontFamily: "inter", fontSize: "18px", fontWeight: 500, fontStyle: "normal", lineHeight: "normal" }}>View All</Link>

                        </div>

                        <div className='row  mt-3'>
                                <div className='explore_Our_Top_Business_Seller_grid_setup ms-2  gap-4'>
                                        {
                                                exploreOuropBusinessSellersData?.map(exploreOuropBusinessSeller =>
                                                         <ExploreOuropBusinessSeller
                                                        key={exploreOuropBusinessSeller.id} 
                                                        exploreOuropBusinessSeller={exploreOuropBusinessSeller}>

                                                        </ExploreOuropBusinessSeller>)

                                        }

                                </div>
                        </div>
                </div>


        );
}

export default ExploreOuropBusinessSellers;