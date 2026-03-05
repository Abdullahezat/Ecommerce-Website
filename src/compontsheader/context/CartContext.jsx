import React, { createContext, useEffect, useState } from 'react'

export const CartContext =createContext();

export default function CartProvider({children}) {


//المفضله

    const [favorites, setFavorites]=useState(() => {
        const savedFav = localStorage.getItem('favoritesItem');
        return savedFav ? JSON.parse(savedFav) : [];
    });

    const addToFavorites = (item) =>{
        setFavorites((prev) => {
            if (prev.some((i) => i.id === item.id)) return prev;
            return[...prev, item]
        })
    }

    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites))
    },[favorites])

const removeFromFavorites=(id) => {
    setFavorites((prev) => prev.filter((i) => i.id !==id))
}















//cart
    const [cartItems, setCartItems]=useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : []
    });

//تزويد العناصر
    const inscreaseQuantity= (id) =>{
        setCartItems(prevItems => prevItems.map(item =>
            item.id === id ? {...item, quantity : item.quantity+ 1} : item
        ))
    }

//لنقص العناصر
    const decreaseQuantity = (id) =>{
            setCartItems(prevItems => prevItems.map(item =>
            item.id === id && item.quantity > 1 ? {...item,quantity : item.quantity -1} : item
        ))
    }

    //لحذف عناصر

    const removeFroMCart = (id)=>{
                setCartItems(prevItems => prevItems.filter(item => item.id !==id))
    }

    const addToCart=(item) => {
        setCartItems((prevItems)=>[...prevItems , {...item, quantity: 1}])
    }


    useEffect(()=>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    },[cartItems])
  return (
    <CartContext.Provider value={{cartItems , addToCart,inscreaseQuantity,decreaseQuantity,removeFroMCart,addToFavorites,favorites,removeFromFavorites}}>
        {children}
    </CartContext.Provider>
  )
}
