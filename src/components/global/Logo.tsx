import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoSvg from '../../../public/logo.svg';

export default function Logo() {
  return (
    <div className="relative md:h-12 md:w-20 lg:h-16 lg:w-24">
      <Link href={'/'}>
        <Image src={LogoSvg} alt="logo da empresa" fill />
      </Link>
    </div>
  );
}
