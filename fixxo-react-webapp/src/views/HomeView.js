import React, { useContext } from 'react';
import FooterSection from '../sections/FooterSection';
import MainMenuSection from '../sections/MainMenuSection';
import ProductGridSection from '../sections/ProductGridSection';
import ShowcaseSection from '../sections/ShowcaseSection';
import { FeaturedProductsContext, ProductContext } from '../contexts/contexts'


const HomeView = () => {

  window.top.document.title = 'Fixxo.'
  
  const featuredProducts = useContext(ProductContext)

  return (
    <>

      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductGridSection title="Featured Products" products={featuredProducts} />
      <FooterSection />
    </>
  )
}
 
export default HomeView 