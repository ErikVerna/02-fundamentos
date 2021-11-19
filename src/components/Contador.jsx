import { useState } from "react";

const Contador = ({ inicial, factor }) => {
  const [contador, setContador] = useState(inicial);

  const aumentar = () => {
    setContador((el) => el + factor);
  };
  const disminuir = () => {
    setContador((el) => el - factor);
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
