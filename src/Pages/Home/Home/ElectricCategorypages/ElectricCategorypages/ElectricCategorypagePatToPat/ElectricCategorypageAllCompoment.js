import React from 'react';
import ProductTypeSecton from './ProductTypeElectricCategoryAndAllSite/ProductTypeSection/ProductTypeSecton';
import ProductTypeRightSiteSection from './ProductTypeElectricCategoryAndAllSite/ProductTypeSection/ProductTypeRightSiteSection/ProductTypeRightSiteSection';

const ElectricCategorypageAllCompoment = () => {
    return (
        <div>
            <h1>ElectricCategorypageAllCompomen</h1>

<div className='row'>
    <div className='col-lg-3'style={{padding:60}}>
    <ProductTypeSecton></ProductTypeSecton>
        
    </div>
    <div className='col-lg-7'>
        <ProductTypeRightSiteSection></ProductTypeRightSiteSection>        
    </div>

</div>
            
            
        </div>
    );
};

export default ElectricCategorypageAllCompoment;