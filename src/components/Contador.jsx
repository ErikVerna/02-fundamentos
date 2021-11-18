import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(10);

  const aumentar = () => {
    setContador((el) => el + 1);
  };

  const disminuir = () => {
    setContador((el) => el - 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>

      <hr />
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};

export default Contador;
