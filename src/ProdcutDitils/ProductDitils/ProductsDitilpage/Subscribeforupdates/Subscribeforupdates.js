import React from 'react';
import "./Subscribeforupdates.css"
import backgroundimg from "../../../../assets/productDitils/backgrout.png"
import checked from "../../../../assets/productDitils/checked.svg"
// setup  section
const Subscribeforupdates = () => {


    return (
        <section className='mt-4'> 
            <div className='' style={{ background: "#F85606", height: "180px" }}  >

                {/* site backgroundim setup i'ts ok  */}
                <div

                >
                    <img src={backgroundimg} alt='' style={{ marginRight: 680 }}></img>

                </div>
                {/* setup all    and setup   */}

                <div className='d-flex justify-content-center ' style={{ marginTop: -110, gap: 190 }} >




                    <div className='' style={{ margin: -4 }}>
                        <h5 className='subcribe_for_update_text_styl'>Subscribe for updates</h5>
                        <p className='exclusibe_early_text_style mt-1'>Subscribe for exclusive early sale access and new arrivals.</p>
                    </div>


                    <div>
                        <div className="input-group input_fild_setyp_and_style" style={{ marginTop: -9 }}>
                            <input

                                type="text"
                                className="form-control"
                                placeholder="Enter your email here"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <span className="subscription_button_setup_style" id="basic-addon2">
                                <span className='Subscribe_text_style' >Subscribe</span>
                            </span>
                        </div>
                        <div className='d-flex gap-2  mt-2'>
                            <img src={checked} alt='' style={{ width: "16px", height: "16px" }}></img>


                            <p className='agree_to_receive_text-style '>I agree to receive updates from CART24</p>
                        </div>


                    </div>


                </div>

            </div>

        </section>


    );
};

export default Subscribeforupdates;