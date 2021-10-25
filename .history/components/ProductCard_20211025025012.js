import Link from "next/link"
import Image from "next/image"

const ProductCard = ({ product }) => {

   const { handle, title,  } = product.node;
   const { altText, originalSrc  } = product.node.images.edges[0].node;

   
   return (
   <Link>
      <a href="" className="groud"></a>
   </Link>
   )
}

export default ProductCard
