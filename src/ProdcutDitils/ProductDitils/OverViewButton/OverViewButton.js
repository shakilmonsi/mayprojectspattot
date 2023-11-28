import React from 'react';
import "./OverViewButton.css"
const OverViewButton = () => {
    return (
        <div className='mt-4'>
           <div className='d-flex justify-content-center border-d-none  gap-3 '>
            <button className='b_setup_red'><span >OverView</span></button>
            <button className='b_setup'  style={{ border: "none"}}><span >Specification</span></button>
            <button className='b_setup'  style={{ border: "none"}}><span >Reviews</span></button>
        
           </div>
            
        </div>
    );
};

export default OverViewButton;