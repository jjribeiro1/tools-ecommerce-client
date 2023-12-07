'use client';
import React from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { SignOutButton } from '@clerk/nextjs';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function AvatarComponent() {
  const { user } = useUser();
  const avatarLetter = user?.firstName?.at(0);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Avatar.Root className="inline-flex h-[22px] w-[22px] sm:h-[30px] sm:w-[30px] select-none items-center justify-center overflow-hidden rounded-full align-middle cursor-pointer">
          <Avatar.Fallback
            className="leading-1 flex h-full w-full items-center justify-center bg-white text-xs sm:text-base font-medium"
            delayMs={0}
          >
            {avatarLetter}
          </Avatar.Fallback>
        </Avatar.Root>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        sideOffset={10}
        avoidCollisions={true}
        collisionPadding={{ right: 15 }}
        className="z-50"
      >
        <div className="bg-gray-100 text-gray-900 flex flex-col rounded-md shadow divide-y-[1px] divide-gray-400">
          <Link
            href={'/orders'}
            className="text-xs sm:text-sm px-4 py-2 rounded-t-md cursor-pointer hover:bg-gray-200"
          >
            Meus pedidos
          </Link>
          <SignOutButton>
            <button className="text-xs sm:text-sm px-4 py-2 rounded-b-md cursor-pointer hover:bg-gray-200">
              Sair
            </button>
          </SignOutButton>
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
