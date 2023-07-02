'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types/product';
import Image from 'next/image';
import Spinner from '@/components/Spinner';
import { convertCentsToReal } from '@/utils/convert-cents-to-real';
import { VscArrowSmallDown } from 'react-icons/vsc';

interface ProductPageProps {
  params: {
    id: string;
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const baseImageUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL as string;

export default function ProductPage({ params }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantityClick = () => {
    setQuantity(quantity >= 1 ? (quantity) => quantity + 1 : 1);
  };

  const handleDecreaseQuantityClick = () => {
    setQuantity(quantity >= 2 ? (quantity) => quantity - 1 : 1);
  };

  const handleInputQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) > 0) {
      setQuantity((quantity) => parseInt(e.target.value));
    }
  };

  const getProduct = async () => {
    const response = await fetch(`${API_URL}/products/${params.id}?populate=*`);
    const product = await response.json();

    return product.data as Product;
  };

  const { data, isLoading } = useQuery({
    queryKey: [`products/${params.id}`],
    queryFn: getProduct,
  });

  return (
    <>
      <nav className="py-4">
        <ol className="flex gap-5 ml-10">
          <li className="after:content-['>'] after:ml-5">
            <Link href={'/'}>página inicial</Link>
          </li>
          <li>
            <Link href={`category/${data?.attributes.categories.data.at(0)?.id}`}>
              {data?.attributes.categories.data.at(0)?.attributes.name}
            </Link>
          </li>
        </ol>
      </nav>

      <article className="bg-white grid grid-cols-2 gap-8 my-12 px-4">
        <div className="relative h-[500px] w-[500px] place-self-center">
          {isLoading && (
            <div className="absolute top-1/2 left-1/2">
              <Spinner />
            </div>
          )}

          {data && (
            <Image
              src={`${baseImageUrl}${data.attributes.images.data.at(0)?.attributes.url}`}
              alt={`imagem do produto ${data?.attributes.name}`}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="p-4">
          <h1 className="uppercase text-[#1C1B1B] font-medium pb-2 border-b border-b-[#eaeaea]">
            {data?.attributes.name}
          </h1>

          {data?.attributes.discountIsActive ? (
            <div className="flex flex-col gap-1 w-full mt-4 pb-2 border-b border-b-[#eaeaea]">
              <div className="text-sm lg:text-base text-zinc-600 flex items-center gap-4">
                <span className=" inline-flex gap-1">
                  <em className="line-through">R$ {(data.attributes.originalPrice / 100).toFixed(2)}</em>
                </span>

                <span className="bg-[#07aa07] text-white text-xs lg:text-sm rounded inline-flex items-center py-[2px] px-1">
                  <VscArrowSmallDown className="h-5 w-5" />
                  {`${data?.attributes.discountPercentage}%`}
                </span>
              </div>

              <div className="text-sm lg:text-base">
                <span className=" inline-flex gap-1">
                  <strong className="text-slate-900">
                    {convertCentsToReal(data.attributes.promotionalPrice)}
                  </strong>
                </span>
              </div>
            </div>
          ) : (
            <div className="text-sm lg:text-base mt-4 pb-2 border-b border-b-[#eaeaea]">
              <span className=" inline-flex gap-1">
                <strong className="text-slate-900">
                  {convertCentsToReal(data?.attributes.promotionalPrice as number)}
                </strong>
              </span>
            </div>
          )}
          <div className="flex items-center gap-8 mt-16">
            <div className="flex items-center gap-8">
              <span className="text-[#1C1B1B]">Quantidade</span>

              <div className="relative flex items-center border border-[#d1cccc]">
                <input
                  type="number"
                  className="text-center text-[#777777] bg-white focus:outline-none h-8 w-10 px-1 flex"
                  min={1}
                  onChange={handleInputQuantityChange}
                  value={quantity}
                />

                <div className="flex flex-col h-8">
                  <button
                    className="bg-white flex justify-center items-center h-4 w-4 py-[1px] px-1"
                    onClick={handleIncreaseQuantityClick}
                  >
                    +
                  </button>

                  <button
                    className="bg-white flex justify-center items-center h-4 w-4 py-[1px] px-1"
                    onClick={handleDecreaseQuantityClick}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>

            <button type="button" className="bg-[#232f3e] text-white py-2 px-6 rounded-2xl">
              comprar
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
