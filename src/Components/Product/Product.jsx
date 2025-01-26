import ProductCard from "./ProductCard"
import products from "../../../data/products.json"

const Product = () => {
  return (
    <>
      <div className="lg:mx-12 my-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8 md:gap-3 lg:px-0">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              id={product.id}
              image={product.image}
              rating={product.rating}
              priceInKobo={product.priceInKobo}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Product