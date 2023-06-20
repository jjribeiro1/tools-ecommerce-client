import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from '../../../public/WhatsAppButtonWhiteSmall.png';
import { AiOutlineMail } from 'react-icons/ai';
import { TopCategories } from '@/types/top-categories';

async function getCategories(): Promise<TopCategories> {
  const response = await fetch(`${process.env.API_URL}/categories?fields[0]=name&filters[id][$lt]=6`);
  const categories = await response.json();
  return categories;
}

export default async function Footer() {
  const year = new Date().getFullYear();
  const categories = await getCategories();

  return (
    <footer className="bg-[#232f3e] text-white flex flex-col">
      <section className="grid grid-cols-3 px-6 py-4">
        <section className="flex flex-col items-center gap-4">
          <h2 className="font-bold text-lg">Entre em contato</h2>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-[#febd69] transition-colors duration-200">
              <Link href={'mailto:example@outlook.com'} className="inline-flex gap-2 items-center">
                <AiOutlineMail className="h-5 w-5" />
                example@outlook.com
              </Link>
            </li>

            <li>
              <Link href={'https://wa.me/552181031730'} target="_blank">
                <figure className="relative h-[35px] w-[200px]">
                  <Image
                    src={WhatsAppButton}
                    alt="xd"
                    fill
                    sizes="(min-width: 375px) 100%"
                    className="object-cover rounded-lg"
                  />
                </figure>
              </Link>
            </li>
          </ul>
        </section>

        <section className="flex flex-col items-center gap-4">
          <h2 className="font-bold text-lg">Informação</h2>
          <ul className="text-sm flex flex-col gap-2">
            <li className="hover:text-[#febd69] transition-colors duration-200 cursor-pointer">
              <Link href={'/delivery-policy'}>Política de entrega</Link>
            </li>
            <li className="hover:text-[#febd69] transition-colors duration-200 cursor-pointer">
              <Link href={'/return-policy'}> Troca e devolução</Link>
            </li>
            <li className="hover:text-[#febd69] transition-colors duration-200 cursor-pointer">
              <Link href={'/privacy-policy'}>Política de privacidade</Link>
            </li>
            <li className="hover:text-[#febd69] transition-colors duration-200 cursor-pointer">
              <Link href={'/terms'}>Termos e condições</Link>
            </li>
          </ul>
        </section>

        <section className="flex flex-col items-center gap-4">
          <h2 className="font-bold text-lg">Categorias</h2>
          <ul className="text-sm flex flex-col gap-2">
            {categories.data.map((category, i) => (
              <li
                key={i}
                className="first-letter:uppercase hover:text-[#febd69] transition-colors duration-200"
              >
                <Link href={`category/${category.id}`}>{category.attributes.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <small className="text-center py-4 border-t border-t-zinc-600">
        Casa das Ferramentas {year} - Todos os direitos reservados
      </small>
    </footer>
  );
}
