import React from 'react';
import Image from 'next/image';
import { VscArrowSmallDown } from 'react-icons/vsc';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL;

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="bg-white flex flex-col flex-none h-[330px] w-[210px] gap-2 lg:h-[380px] lg:w-[260px] lg:gap-4 p-2 border border-transparent rounded-md hover:border-slate-600 transition-colors duration-200 cursor-pointer">
      <div className="relative w-full h-[200px] lg:h-[250px]">
        <Image
          src={`${apiUrl}${product.attributes.images.data.at(0)?.attributes.url}`}
          alt={`Oferta de ${product.attributes.name} em um preço mais baixo que o normal`}
          fill
          sizes="(min-width: 375px) 100%"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <span className="first-letter:capitalize">{product.attributes.name}</span>

        {product.attributes.discountIsActive ? (
          <div className="flex flex-col gap-1 w-full">
            <div className="text-sm lg:text-base text-zinc-600 flex items-center gap-4">
              <span className=" inline-flex gap-1">
                de:
                <em className="line-through">R$ {(product.attributes.originalPrice / 100).toFixed(2)}</em>
              </span>

              <span className="bg-[#07aa07] text-white text-xs lg:text-sm rounded inline-flex items-center py-[2px] px-1">
                <VscArrowSmallDown className="h-5 w-5" />
                {`${product.attributes.discountPercentage}%`}
              </span>
            </div>

            <div className="text-sm lg:text-base">
              <span className=" inline-flex gap-1">
                por:
                <strong className="text-slate-900">
                  R$ {(product.attributes.promotionalPrice / 100).toFixed(2)}
                </strong>
              </span>
            </div>
          </div>
        ) : (
          <div className="text-sm lg:text-base">
            <span className=" inline-flex gap-1">
              por:
              <strong className="text-slate-900">
                R$ {(product.attributes.promotionalPrice / 100).toFixed(2)}
              </strong>
            </span>
          </div>
        )}
      </div>
    </li>
  );
}
