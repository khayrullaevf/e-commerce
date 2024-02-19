import Cta from "@/components/cta";
import Feature from "@/components/feature"
import Product from "@/components/product";
import { ProductType } from "@/interfaces";

const AllProducts = async() => {
     const res = await fetch("https://fakestoreapi.com/products");
     const products: ProductType[] = await res.json();
  return (
    <div className="mt-[100px] flex  flex-col items-center">
      <Feature />
      <section className="flex flex-col space-y-12 max-w-7xl">
        <h1 className="text-5xl font-bold text-center">
          <span className="text-blue-600">All</span> Products
        </h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </section>
      <Cta/>
    </div>
  );
}

export default AllProducts