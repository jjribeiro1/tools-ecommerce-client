'use client';
import React, { useCallback } from 'react';
import * as Select from '@radix-ui/react-select';
import { TbChevronDown } from 'react-icons/tb';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface ProductSortBarProps {
  sortOptions: { label: string; name: string; value: string }[];
  productsCount: number;
}

export default function ProductSortBar({ sortOptions, productsCount }: ProductSortBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="bg-white flex items-center sm:justify-between gap-2 lg:gap-4 py-2 pl-2 rounded-md w-full">
      <div className="flex items-center gap-2 lg:gap-4">
        <p className="text-xs lg:text-sm">Ordernar por:</p>
        <Select.Root>
          <Select.Trigger className="text-xs lg:text-sm flex items-center gap-1 bg-[#f7f7f7] p-1 sm:p-2 rounded-md shadow-sm focus:outline-none">
            <Select.Value placeholder="Preço, menor para maior" />
            <Select.Icon>
              <TbChevronDown />
            </Select.Icon>
          </Select.Trigger>
          <Select.Content
            position="popper"
            align="center"
            sideOffset={5}
            className="z-50 bg-[#f7f7f7] rounded"
          >
            {sortOptions.map((option, i) => (
              <Select.Item
                key={i}
                value={option.label}
                onPointerDown={() => {
                  router.push(pathname + '?' + createQueryString(option.name, option.value));
                }}
                className="text-[#777777] text-sm px-3 py-0.5 hover:text-white hover:bg-zinc-500/80 cursor-pointer"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>

      <span className="text-[#777777] text-xs lg:text-sm pr-2">{productsCount} produtos encontrados</span>
    </div>
  );
}
