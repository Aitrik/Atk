import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Layout/Footer';
import Home from './Cms/Home';
import Shop from './Cms/Shop';
import Category from './Cms/Category';
import Product_detail from './Cms/Product_detail';
import Cart from './Cms/Cart';
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/:id' element={<Product_detail/>}/>
          <Route path='/category/:id' element={<Category/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
