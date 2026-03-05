import React, { useContext } from "react";
import { FaRegHeart, FaShare, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../compontsheader/context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductInfo({ product }) {
      const {cartItems,addToCart,favorites,addToFavorites,removeFromFavorites}=useContext(CartContext)

        const isIncart=cartItems.some(i => i.id === product.id);

      const navigate = useNavigate()




          const handelAddToCart= () => {
    addToCart(product)

    toast.success(
      <div className="toast_wrapper">
        <img src={product.images[0]} alt="" className="tosat-img" />
        <div className="toast-content">
          <strong>{product.title}</strong>
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
    const isInFav=favorites.some(i => i.id === product.id);

  const handelAddToFav= () =>{
    if (isInFav) {
      removeFromFavorites(product.id)
    toast.error(`${product.title} Remove From Favorites`)      

    }else{
    addToFavorites(product)
    toast.success(`${product.title} Added  To Favorites`)      
    }

  }


  return (
    <div className="details_item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>

      <p className="price">${product.price}</p>
      <h5>
        Availability : <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand : <span>{product.brand}</span>
      </h5>
      <p className="desc">{product.description}</p>
      <h5>
        {" "}
        <span>Hurry Up! Only {product.stock} products left in stock.</span>
      </h5>
      <button className={`btn ${isIncart ?'in-cart' :' '}`} onClick={handelAddToCart} >
        {isIncart ? "item in cart " : "Add to cart "}<TiShoppingCart />
      </button>

      <div className="icons">
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

export default ProductInfo;
