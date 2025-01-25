import ProductCard from "./ProductCard"
import products from "../../../data/products.json"

const Product = () => {
  return (
    <>
      <div className="text-center py-6">
        <h4 className="text-2xl font-bold md:text-3xl text-green-500">PRODUCTS</h4>
      </div>

      <div className="lg:mx-12 border border-red-500">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 md:gap-3 lg:px-0 pb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              id={product.id}
              image={product.image}
              priceInCent={product.priceInCent}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Product