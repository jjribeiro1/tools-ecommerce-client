import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoSvg from '../../../public/logo.svg';

export default function Logo() {
  return (
    <Link href={'/'}>
      <Image src={LogoSvg} alt="logo da empresa" className="relative h-8 w-16 md:h-12 md:w-20 lg:h-16 lg:w-24" />
    </Link>
  );
}
