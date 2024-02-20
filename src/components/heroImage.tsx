"use client";

import { ProductType } from "@/interfaces";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
  product: ProductType;
  fill: boolean;
}

const HeroImage: FC<Props> = ({ product, fill,}) => {
  const [isLoading, setisLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={`object-contain duration-700 ease-in-out  group-hover:opacity-75 ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoad={() => setisLoading(false)}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out  group-hover:opacity-75 ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoad={() => setisLoading(false)}
        />
      )}
    </>
  );
};

export default HeroImage;
