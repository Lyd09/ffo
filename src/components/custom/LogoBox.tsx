import React from 'react';
import Image from 'next/image';

const LogoBox: React.FC = () => {
  return (
    <div className="card" aria-label="Logotipo da Empresa">
      <div className="bg">
        <Image
          src="/logoFF.svg"
          alt="Logotipo da Empresa"
          width={210}
          height={278}
          className="object-contain"
          data-ai-hint="company logo"
        />
      </div>
      <div className="blob"></div>
    </div>
  );
};

export default LogoBox;
