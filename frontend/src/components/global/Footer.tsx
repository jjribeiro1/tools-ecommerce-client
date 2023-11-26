import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from '../../../public/WhatsAppButtonWhiteSmall.png';
import { AiOutlineMail } from 'react-icons/ai';
import { getCategoriesOverview } from '@/lib/sanity/queries';


export default async function Footer() {
  const categories = await getCategoriesOverview();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#232f3e] text-white flex flex-col">
      <section className="grid grid-cols-2 gap-4 sm:gap-0 sm:grid-cols-3 px-3 py-2 md:px-6 md:py-4">
        <section className="flex flex-col items-center gap-2 md:gap-4">
          <h2 className="font-bold text-sm sm:text-base md:text-lg">Entre em contato</h2>
          <ul className="text-xs sm:text-sm md:text-base flex flex-col gap-2">
            <li className="hover:text-[#febd69] transition-colors duration-200">
              <Link href={'mailto:example@outlook.com'} className="inline-flex gap-2 items-center">
                <AiOutlineMail className="h-5 w-5" />
                example@outlook.com
              </Link>
            </li>

            <li>
              <Link href={'https://wa.me/552181031730'} target="_blank">
                <figure className="relative h-[30px] w-[150px] sm:h-[35px] sm:w-[200px]">
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

        <section className="flex flex-col items-center gap-2 md:gap-4">
          <h2 className="font-bold text-sm sm:text-base md:text-lg">Informação</h2>
          <ul className="text-xs sm:text-sm md:text-base flex flex-col gap-2">
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

        <section className="flex flex-col items-center gap-2 md:gap-4">
          <h2 className="font-bold text-sm sm:text-base md:text-lg">Categorias</h2>
          <ul className="flex flex-col gap-2">
            {categories.map((category, i) => (
              <li
                key={i}
                className="text-xs sm:text-sm md:text-base first-letter:uppercase hover:text-[#febd69] transition-colors duration-200"
              >
                <Link href={`category/${category.slug.current}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <small className="text-xs md:text-base text-center py-2 md:py-4 border-t border-t-zinc-600">
        Casa das Ferramentas {year} - Todos os direitos reservados
      </small>
    </footer>
  );
}
