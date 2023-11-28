import React from 'react';
import Subscribeforupdates from '../Subscribeforupdates/Subscribeforupdates';
import OverViewComponent from '../../OverViewComponent/OverViewComponent';
import OverViewButton from '../../OverViewButton/OverViewButton';
import SingleProductDitils from '../../SingleProductDitils/SingleProductDitils';
import RecommendedForYous from '../../../../Pages/Home/Home/RecommendedForYous/RecommendedForYous/RecommendedForYous';
import RecommendedForYousPrdoductDitilspage from '../../RecommendedForYousPrdoductDitilspage/RecommendedForYousPrdoductDitilspage/RecommendedForYousPrdoductDitilspage';
import RelatedProductsDitilsPages from '../RelatedProductsDitilsPage/RelatedProductsDitilsPage/RelatedProductsDitilsPages';
import { Link } from 'react-router-dom';

const ProductDitils = () => {

    return (
        <section>
        <nav  className='d-flex gap-4 px-4'>
        <Link to="/">Home</Link> 
      
        </nav>
            <div >
            <SingleProductDitils></SingleProductDitils>
            <OverViewButton></OverViewButton>
            <OverViewComponent></OverViewComponent>

                   <RelatedProductsDitilsPages></RelatedProductsDitilsPages>

            <RecommendedForYousPrdoductDitilspage></RecommendedForYousPrdoductDitilspage>
            <Subscribeforupdates></Subscribeforupdates>

        </div>
        </section>
        
    );
};

export default ProductDitils;