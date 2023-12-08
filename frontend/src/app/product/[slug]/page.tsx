import React from 'react';
import Link from 'next/link';
import { TbChevronRight } from 'react-icons/tb';
import BuyProductButton from './BuyProductButton';
import ImageCarousel from './ImageCarousel';
import { getProductBySlug } from '@/lib/sanity/queries';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  return (
    <>
      <div className="flex flex-col gap-6 container my-0 mx-auto px-4 pt-4 pb-20">
        <nav className="py-4 border-b border-gray-300 rounded">
          <ol className="flex flex-wrap gap-3">
            <li className="flex items-center gap-2">
              <Link href={'/'} className="text-xs sm:text-sm">
                Página Inicial
              </Link>
              <TbChevronRight />
            </li>
            <li className="flex items-center gap-2">
              <Link href={`/category/${product.category.slug.current}`} className="text-xs sm:text-sm">
                {product.category.name}
              </Link>
              <TbChevronRight />
            </li>
            <li className="text-xs sm:text-sm">{product.name}</li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 border-b border-gray-300 pb-10">
          <ImageCarousel images={product.images} />

          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-[#1C1B1B] font-semibold border-b pb-2 border-gray-300">
              {product.name}
            </h1>

            <div className="flex flex-col gap-2 border-b border-gray-300 pb-2">
              {product.discountIsActive ? (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-5 sm:gap-10">
                    <span className="line-through text-gray-400/90">R$ {product.price.toFixed(2)}</span>
                    <span className="text-xs sm:text-sm inline-block bg-green-600 text-gray-200 px-2 py-0.5 rounded">
                      {`${product.discountPercentage}% OFF`}
                    </span>
                  </div>

                  <span className="font-semibold text-lg text-green-800 tracking-tight">
                    R$ <em>{product.promotionalPrice.toFixed(2)}</em>
                  </span>
                </div>
              ) : (
                <span className="font-semibold text-lg text-green-800 tracking-tight">
                  R$ <em>{product.price.toFixed(2)}</em>
                </span>
              )}
            </div>

            <BuyProductButton product={product} />
          </div>
        </section>

        <section className="py-10 w-full space-y-8">
          <h2 className="text-2xl font-semibold">Descrição</h2>
          <p className="bg-white text-gray-600 p-6">{product.description}</p>
        </section>
      </div>
    </>
  );
}
