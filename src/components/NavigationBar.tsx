'use client';
import React from 'react';
import Link from 'next/link';
import { Root, List, Item, Trigger, Content } from '@radix-ui/react-navigation-menu';
import { BiDialpadAlt } from 'react-icons/bi';
import { TbChevronDown } from 'react-icons/tb';

interface Category {
  id: number;
  attributes: {
    name: string;
  };
}

interface NavigationBarProps {
  categories: Category[];
}

export default function NavigationBar({ categories }: NavigationBarProps) {
  return (
    <Root className="bg-[#232f3e] w-full flex items-center md:gap-3 md:p-3">
      <BiDialpadAlt className="text-white md:h-6 md:w-6" />

      <List className="text-white flex items-center md:gap-10">
        <Item className="flex items-center">
          <Trigger
            className="flex items-center group md:gap-10 lg:gap-16 xl:gap-24 relative"
            onPointerMove={(e) => e.preventDefault()}
            onPointerLeave={(e) => e.preventDefault()}
          >
            <span className="lg:text-lg md:after:bg-[#596069] md:after:w-[1px] md:after:h-6 md:after:absolute md:after:-right-3 md:after:top-15">
              Todas as categorias
            </span>
            <TbChevronDown
              className="group-data-[state=open]:-rotate-180 transition-transform duration-150 ease-in"
              aria-hidden
            />
          </Trigger>

          <Content
            className="z-30 bg-[#131921] rounded-b-md absolute md:-left-7 md:top-[35px] lg:top-[40px] md:w-60 lg:w-72"
            onPointerEnter={(e) => e.preventDefault()}
            onPointerLeave={(e) => e.preventDefault()}
          >
            <ul className="flex flex-col divide-y divide-slate-700/70 cursor-pointer">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="hover:text-[#febd69] md:text-sm lg:text-base md:p-2 lg:px-4 lg:py-3"
                >
                  <Link href={`/category/${category.id}`} className="inline-block min-w-full">
                    {category.attributes.name}
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
