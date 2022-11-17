import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.min.css';

import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishlistView from './views/WishlistView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import { ProductContext } from './contexts/contexts'

function App() {

  const [products, setProducts] = useState ([])
  const [featuredProducts, setFeaturedProducts] = useState ([])
  const [dealProducts, setDealProducts] = useState ([])

  useEffect (() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeaturedProducts(await result.json())
    }
    fetchFeaturedProducts()

    const fetchDealProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setDealProducts(await result.json())
    }
    fetchDealProducts()

  }, [setProducts, setFeaturedProducts, setDealProducts])



  return (
    <BrowserRouter>
      <ProductContext.Provider value={{products, featuredProducts, dealProducts}}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishlistView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
