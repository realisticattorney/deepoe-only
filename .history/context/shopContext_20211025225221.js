import { createContext, useState, useEffect } from "react"
import { createCheckout } from "../lib/shopify"

const CartContext = createContext()

export default function ShopProvider({ children }) {
   
   const [cart, setCart] = useState([])
   const [cartOpen, setCartOpen] = useState(false)
   const [checkoutId, setCheckoutId] = useState("")
   const [checkoutUrl, setCheckoutUrl] = useState("")

   async function addToCart(newItem) {
      if(ca)
   
   
   return (
      <div>
         
      </div>
   )
}


