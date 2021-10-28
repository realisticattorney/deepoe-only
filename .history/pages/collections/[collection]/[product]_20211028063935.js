import ProductPageContent from '../../../components/ProductPageContent';
import { getAllProducts, getProduct } from '../../../lib/shopify';

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="min-h-screen py-12">
      <ProductPageContent product={product} />
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  const products = await getAllProducts();
//   const paths = products.map((product) => ({
//     params: { product: String(product.node.handle) },
//   }));
  var sections = products.map(variant => {
   return variant.node.products.edges.map(val => ({collection: variant.node.handle, value: val}))
});

// then iterate through the two resulting arrays of objects, combining each into the attributes object you want
var paths = [];
for (var i = 0; i < sections[0].length; i++) {
   for (var j = 0; j < sections[1].length; j++) {
      paths.push({params: { collection: sections[0][i], product: sections[1][j] }});
   }
}

console.log(paths)
// console.log(paths[0].params[0])



  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);
  console.log(params)
  return {
    props: {
      product,
    },
  };
}
