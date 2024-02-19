import Cta from "@/components/cta";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Product from "@/components/product";
import Statistics from "@/components/statistics";
import { ProductType } from "@/interfaces";

const HomePage = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();
  console.log(products);

  return (
    <main className="mt-[100px]  min-h-screen max-w-7xl mx-auto px-8 md:px-0">
      <Hero />
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center">
          <span className="text-blue-600">E-BUY</span> SHOP DEALS
        </h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
        <Cta/>
        <Statistics/>
      </section>
    </main>
  );
};

export default HomePage;
