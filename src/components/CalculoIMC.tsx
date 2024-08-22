'use client';

import { ChangeEvent, useState } from 'react';

export default function CalculoIMC() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [total, setTotal] = useState('');

  const handleChangeAltura = (event: ChangeEvent<HTMLInputElement>) => {
    setAltura(event.target.value);
  };

  const handleChangePeso = (event: ChangeEvent<HTMLInputElement>) => {
    setPeso(event.target.value);
  };

  const handleResult = () => {
    const alturaMetro = Number(altura) / 100;
    const resultado = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
    setTotal(resultado);
  };

  return (
    <div>
      <p>
        Peso:
        <input
          type="text"
          id="peso"
          name="peso"
          value={peso}
          onChange={handleChangePeso}
        />
      </p>
      <p>
        Altura:
        <input
          type="text"
          id="altura"
          name="altura"
          value={altura}
          onChange={handleChangeAltura}
        />
      </p>
      <button onClick={handleResult}>Calcular IMC</button>
      <p>Total IMC: {total}</p>
    </div>
  );
}
