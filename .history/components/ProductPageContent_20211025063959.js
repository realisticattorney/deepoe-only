import Image from "next/image";

const ProductPageContent = ({ product }) => {
  return (
  <div className="flex flex-col ">
   {product.title}
  </div>);
};

export default ProductPageContent;
