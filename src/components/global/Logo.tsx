import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="relative md:h-12 md:w-20 lg:h-16 lg:w-24">
      <Image src="./logo.svg" alt="logo da empresa" fill />
    </div>
  );
}
