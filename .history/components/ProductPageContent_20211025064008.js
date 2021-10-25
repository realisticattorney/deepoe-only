import Image from "next/image";

const ProductPageContent = ({ product }) => {
  return (
  <div className="flex flex-col justify-between items-center space-y-8">
   {product.title}
  </div>);
};

export default ProductPageContent;
