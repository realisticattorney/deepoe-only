import Link from "next/link"
import Image from "next/image"

const ProductCard = ({ product }) => {

   const { handle, title,  } = product.node;
   const { altText, originalSrc  } = product.node.images.edges[0].node;

   
   return (
   <Link>
      <a className="group">
         <div className="w-full bg-gray-200 round"></div>
      </a>
   </Link>
   )
}

export default ProductCard