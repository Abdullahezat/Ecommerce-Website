import React, { useContext } from 'react'
import { CartContext } from '../../compontsheader/context/CartContext'
import PageTransion from '../../compontsheader/PageTransion'
import { p } from 'framer-motion/client'
import Products from '../../compontsheader/slideProducts/Products'



function Favorites() {
  const {favorites}= useContext(CartContext)

  return (
<PageTransion>
<div className="category_prodycts FavoritesPage">
    <div className="container">
    <div className="top_slide">
        <h2>Your Favorites</h2>
    </div>
    {favorites.length === 0 ?(
        <p>No Favorites Products yet. </p>
    ):(
        <div className="products">
            {favorites.map(item =>(
                <Products item={item} key={item.id} />
            ))}
        </div>
    )}
    </div>
</div>

</PageTransion>
  )
}

export default Favorites
