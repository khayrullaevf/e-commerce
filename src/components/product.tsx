"use client";

import { ProductType } from "@/interfaces";
import React, { FC } from "react";
import Link from "next/link";
import CustomImage from "./image";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  console.log(product);

  return (
    <Link href={`/product/${product.id}`} className=" h-[450px] flex flex-col group rounded-lg p-6  hover:scale-105  transition-transform  ease-out duration-200 border ">
      <div className="relative flex-1  max-h-72 ">
        <CustomImage product={product}  fill  sizes={0}/>
      </div>

      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mt-3">
        {product.category}
      </h3>
      <div className="font-semibold flex items-center justify-between mt-4 mb-1 ">
        <p className="w-40 truncate"> {product.title}</p>
        <p className="text-yellow-600">{product.price}$</p>
      </div>
      <p className="leading-relaxed text-base line-clamp-3">
        {product.description}
      </p>
    </Link>
  );
};

export default Product;
