'use client';
import React from 'react';
import Link from 'next/link';
import { Root, List, Item, Trigger, Content } from '@radix-ui/react-navigation-menu';
import { BiDialpadAlt } from 'react-icons/bi';
import { TbChevronDown } from 'react-icons/tb';
import { CategoryOverview } from '@/types/category';

interface NavigationBarProps {
  categories: CategoryOverview[];
}

export default function NavigationBar({ categories }: NavigationBarProps) {
  return (
    <Root className="bg-[#232f3e] w-full flex items-center gap-3 py-1.5 px-3 lg:p-3">
      <BiDialpadAlt className="text-white h-5 w-5 md:h-6 md:w-6" />

      <List className="text-white flex items-center md:gap-10">
        <Item className="flex items-center">
          <Trigger
            className="flex items-center group gap-5 md:gap-10 lg:gap-16 xl:gap-24 relative"
            onPointerMove={(e) => e.preventDefault()}
            onPointerLeave={(e) => e.preventDefault()}
          >
            <span className="text-sm lg:text-lg md:after:bg-[#596069] md:after:w-[1px] md:after:h-6 md:after:absolute md:after:-right-3 md:after:top-15">
              Todas as categorias
            </span>
            <TbChevronDown
              className="group-data-[state=open]:-rotate-180 transition-transform duration-150 ease-in"
              aria-hidden
            />
          </Trigger>

          <Content
            className="z-30 bg-[#131921] rounded-b-md absolute -left-7 top-[22px] md:top-[26px] lg:top-[40px] w-48 md:w-60 lg:w-72"
            onPointerEnter={(e) => e.preventDefault()}
            onPointerLeave={(e) => e.preventDefault()}
          >
            <ul className="flex flex-col divide-y divide-slate-700/70 cursor-pointer">
              {categories.map((category) => (
                <li
                  key={category._id}
                  className="hover:text-[#febd69] text-sm lg:text-base p-1 px-2 md:p-2 lg:px-4 lg:py-3"
                >
                  <Link href={`/category/${category.slug.current}`} className="inline-block min-w-full">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Content>
        </Item>
      </List>
    </Root>
  );
}
