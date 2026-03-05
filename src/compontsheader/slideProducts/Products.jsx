import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa6";
import toast from "react-hot-toast";

function Products({ item }) {

  const navigate = useNavigate()

  const {cartItems,addToCart,favorites,addToFavorites,removeFromFavorites}=useContext(CartContext)

  
  const isIncart=cartItems.some(i => i.id === item.id);
  //اظهار المنتج اللي هنشتريه من تحت
  const handelAddToCart= () => {
    addToCart(item)

    toast.success(
      <div className="toast_wrapper">
        <img src={item.images[0]} alt="" className="tosat-img" />
        <div className="toast-content">
          <strong>{item.title}</strong>
          added to Cart
          <div>
            <button className="btn" onClick={() => navigate('/cart')} >View Cart</button>
          </div>
        </div>
      </div>
      ,{duration : 3500}
    )
  }



  //favorites
    const isInFav=favorites.some(i => i.id === item.id);

  const handelAddToFav= () =>{
    if (isInFav) {
      removeFromFavorites(item.id)
    toast.error(`${item.title} Remove From Favorites`)      

    }else{
    addToFavorites(item)
    toast.success(`${item.title} Added  To Favorites`)      
    }

  }


  return (
    <div className={`product ${isIncart ?'in-cart' :''}`}>
      <Link to={`/products/${item.id}`}>
      <span className="status_cart"><FaCheck /> in cart</span>
        <div className="img_product">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="name_product">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>
        <p className="price">$ {item.price}</p>
      </Link>

      <div className="icons">
        <span className="btn_cart" onClick={handelAddToCart }>
          <FaCartArrowDown />
        </span>
        <span className={` ${isInFav ? "in-fav":""}`} onClick={handelAddToFav}>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Products;
