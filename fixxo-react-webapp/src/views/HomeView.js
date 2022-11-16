import React, { useState } from 'react';
import FooterSection from '../sections/FooterSection';
import MainMenuSection from '../sections/MainMenuSection';
import ProductGridSection from '../sections/ProductGridSection';
import ShowcaseSection from '../sections/ShowcaseSection';


const HomeView = ({products = []}) => {

  window.top.document.title = 'Fixxo.'

  return (
    <>

      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductGridSection title="Featured Products" products={products} />
      <ProductGridSection title="Top Products" products={products} />
      <FooterSection />
    </>
  )
}
 
export default HomeView 