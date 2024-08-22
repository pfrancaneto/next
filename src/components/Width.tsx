'use client';

import { useEffect, useState } from 'react';

export default function Width() {
  const [width, setWidth] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleAtivar = () => {
    setAtivo((ativo) => !ativo);
  };

  return (
    <div>
      <h2 style={{ color: ativo ? '#0b0' : '#b00' }}>
        A largura da página é: {width}
      </h2>
      <button onClick={handleAtivar}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  );
}
