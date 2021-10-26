import { createContext, useState, useEffect } from "react"
import { createCheckout } from "../lib/shopify"

const CartContext = createContext()

export default function ShopProvider({ children }) {
   
   const [cart, setCart] = useState([])
   const [cartOpen, setCartOpen] = useState(false)
   const [checkout, setCheckout] = useState(null)
   
   return (
      <div>
         
      </div>
   )
}


