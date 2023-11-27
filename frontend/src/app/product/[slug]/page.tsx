import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TbChevronRight } from 'react-icons/tb';
import { getProductBySlug } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  return (
    <>
      <main className="flex flex-col gap-6 container my-0 mx-auto p-2 min-h-screen">
        <nav className="py-4 border-b border-gray-300 rounded">
          <ol className="flex gap-3">
            <li className="flex items-center gap-2">
              <Link href={'/'} className="text-sm">
                Página Inicial
              </Link>
              <TbChevronRight />
            </li>
            <li className="flex items-center gap-2">
              <Link href={`/category/${product.category.slug.current}`} className="text-sm">
                {product.category.name}
              </Link>
              <TbChevronRight />
            </li>
            <li className="text-sm">{product.name}</li>
          </ol>
        </nav>

        <section className="grid grid-cols-2 gap-6 border-b border-gray-300 pb-2">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              {product.images.map((image, i) =>
                i > 0 ? (
                  <Image
                    key={i}
                    src={urlFor(image).url()}
                    alt={`imagem do produto ${product.name}`}
                    width={150}
                    height={150}
                    className="aspect-auto"
                  />
                ) : null
              )}
            </div>
            <Image
              src={urlFor(product.images[0]).url()}
              alt={`imagem do produto ${product.name}`}
              width={500}
              height={500}
              className="aspect-auto"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-[#1C1B1B] font-semibold border-b pb-2 border-gray-300">
              {product.name}
            </h1>

            <div className="flex flex-col gap-2 border-b border-gray-300 pb-2">
              {product.discountIsActive ? (
                <span className="line-through text-gray-400/90">R$ {product.price.toFixed(2)}</span>
              ) : null}

              <span className="font-semibold text-lg text-green-800 tracking-tight">
                R$ <em>{product.promotionalPrice.toFixed(2)}</em>
              </span>
            </div>

            <button className="bg-[#232F3E] text-white px-4 py-2 rounded-l-full rounded-r-full w-min mt-8 hover:bg-[#232F3E]/95">
              COMPRAR
            </button>
          </div>
        </section>

        <section className="py-10 w-full space-y-8">
          <h2 className="text-2xl font-semibold">Descrição</h2>
          <p className="bg-white text-gray-600 p-6">{product.description}</p>
        </section>
      </main>
    </>
  );
}
