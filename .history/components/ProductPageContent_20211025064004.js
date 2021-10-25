import Image from "next/image";

const ProductPageContent = ({ product }) => {
  return (
  <div className="flex flex-col justify-between items-center ">
   {product.title}
  </div>);
};

export default ProductPageContent;
