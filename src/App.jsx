import { Route, Routes } from "react-router-dom"
import BtmHeader from "./compontsheader/BtmHeader"
import TopHeader from "./compontsheader/TopHeader"
import Home from "./page/home/Home"
import ProductDetails from "./page/ProductDetails/ProductDetails"
import Cart from "./page/cart/Cart"
import { Toaster } from "react-hot-toast"
import ScorllTop from "./compontsheader/ScorllTop"
import { AnimatePresence } from "framer-motion"
import CategroyPage from "./page/CategoryPage/CategroyPage"
import SearchRestults from "./page/SearchRestults"
import Favorites from "./page/favorites/Favorites"
function App() {
  return (
    <>
    <header>
      <TopHeader/>
      <BtmHeader/>
    </header>

<Toaster position="bottom-right" toastOptions = {{
  style:{
    background:'#e9e9e9',
    borderRadius:'5px',
    padding:'14px'
}
}}/>
<ScorllTop/>
<AnimatePresence mode="wait">   
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/cart"element={<Cart/>}/>
      <Route path="/search"element={<SearchRestults/>}/>
      <Route path="/favorites"element={<Favorites/>}/>
      <Route path="/products/:id"element={<ProductDetails/>}/>
      <Route path="/category/:category"element={<CategroyPage/>}/>
    </Routes>  
</AnimatePresence>



    </>
  )
}

export default App
