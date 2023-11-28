import React from 'react';
import "./ProductTypeSecton.css"
import Form from 'react-bootstrap/Form';

const ProductTypeSecton = () => {
    return (
        <div className="" style={{padding:60}}>
  
          <div className="col-lg-3 ">
            <div>
                <div className='d-flex justify-content-between '>
                    <h6>Product type</h6>
                    <p >Clear</p>
                </div>

                {/* //section catagry   and price range  and all  leftSite  */}
                <div>
                    <div className='d-flex gap-4'>
                        <div className='align-items-center d-flex gap-2'>
                        <Form.Check type="radio" style={{width:"14px" ,height:"14px",color:"#717171"}} aria-label="radio 1" />
                        <span className='all_types_text'>All type</span>
                        </div>
                        <div className='align-items-center d-flex gap-2'>
                        <Form.Check type="radio" style={{width:"14px" ,height:"14px",color:"#717171"}} aria-label="radio 1" />
                        <span className='physial_digital_style'>Physical Products</span>
                        </div>
                        <div className='align-items-center d-flex gap-2'>
                        <Form.Check type="radio" style={{width:"14px" ,height:"14px",color:"#717171"}} aria-label="radio 1" />
                        <span className='physial_digital_style mt-'>Digital Products</span>
                        </div>
                         
                    </div>

                    {/* //price Range section setup  */}
                            <div style={{marginTop:"68px"}}>
                            <div className='d-flex justify-content-between '>
                    <h6>Price Range</h6>
                    <p >Clear</p>
                </div>
                            </div>




                </div>
                


            </div>
        
           
          </div>
      jjjjjjjjjjjjjjjjjjjjj
      
      
       {/* product ditils  site setup and  style  */}
          <div className="col-lg-8">
           
      
      jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
      
      </div>
            </div>
         
      
    );
};

export default ProductTypeSecton;