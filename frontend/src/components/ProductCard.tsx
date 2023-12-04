import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { VscArrowSmallDown } from 'react-icons/vsc';
import { Product } from '@/types/product';
import { urlFor } from '@/lib/sanity';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li>
      <Link
        href={`/product/${product.slug.current}`}
        className="bg-gray-100/70 flex flex-col flex-none h-[350px] w-[200px] xl:w-[250px] border border-transparent rounded-md hover:border-slate-600 transition-colors duration-200 cursor-pointer"
      >
        <div className="flex flex-col gap-1">
          <div className="relative h-[225px]">
            <Image
              src={urlFor(product.images[0]).url()}
              alt={`Imagem do produto ${product.name}`}
              fill
              sizes="100%"
              className="rounded-md"
            />
          </div>
          <h2 className="first-letter:capitalize pl-1 pt-1">{product.name}</h2>
        </div>

        <div className="mt-auto pb-2 pl-2">
          {product.discountIsActive ? (
            <div className="flex flex-col gap-1 w-full">
              <div className="text-sm lg:text-base text-zinc-600 flex items-center gap-4">
                <span className=" inline-flex gap-1">
                  de:
                  <em className="line-through">R$ {product.price}</em>
                </span>

                <span className="bg-[#07aa07] text-white text-xs lg:text-sm rounded inline-flex items-center py-[2px] px-1">
                  <VscArrowSmallDown className="h-5 w-5" />
                  {`${product.discountPercentage}%`}
                </span>
              </div>

              <div className="text-sm lg:text-base">
                <span className=" inline-flex gap-1">
                  por:
                  <strong className="text-slate-900">R$ {product.promotionalPrice.toFixed(2)}</strong>
                </span>
              </div>
            </div>
          ) : (
            <div className="text-sm lg:text-base">
              <span className=" inline-flex gap-1">
                <strong className="text-slate-900">R$ {product.promotionalPrice.toFixed(2)}</strong>
              </span>
            </div>
          )}
        </div>
      </Link>
    </li>
  );
}
