import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;

  const [search, setSearch] = useState('');
  const [showSearch, setShowsearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate()

  const addtoCart = async (itemId, size) => {
    if (!size) {
      toast.error('Select product size');
      return;
    }

    let CartData = structuredClone(cartItems);

    if (CartData[itemId]) {
      if (CartData[itemId][size]) {
        CartData[itemId][size] += 1;
      } else {
        CartData[itemId][size] = 1;
      }
    } else {
      CartData[itemId] = {};
      CartData[itemId][size] = 1;
    }

    setCartItems(CartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      const sizes = cartItems[itemId];
      for (const size in sizes) {
        try {
          if (sizes[size] > 0) {
            totalCount += sizes[size];
          }
        } catch (error) {
          console.error("Error calculating cart count:", error);
        }
      }
    }

    return totalCount;
  };
  const updateQuantity = async (itemId,size,quantity)=>{
         let CartData = structuredClone(cartItems);
         CartData[itemId][size]=quantity;
         setCartItems(CartData);
  }

  const getCartAmount = () => {
    let totalAmount = 0;
  
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
  
      if (!itemInfo) continue; // skip if product not found
  
      for (const size in cartItems[itemId]) {
        try {
          const quantity = cartItems[itemId][size];
          if (quantity > 0) {
            totalAmount += itemInfo.price * quantity;
          }
        } catch (error) {
          console.error("Error calculating total amount:", error);
        }
      }
    }
  
    return totalAmount;
  };
  

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowsearch,
    cartItems,
    addtoCart,
    getCartCount,updateQuantity,getCartAmount,navigate   // ✅ Now available in context
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
