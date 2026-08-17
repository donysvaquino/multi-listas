import { useState } from "react";
import Listas from "../components/Listas";

function VerListas() {
  const [listasCadastradas] = useState(() => {
    return JSON.parse(localStorage.getItem("Listas")) || [];
  });

  return (
    <div className="w-300 mx-auto">
      <h1 className="text-center p-4 text-2xl">
        Veja as suas listas cadastradas:
      </h1>
      <Listas listasCadastradas={listasCadastradas} />
    </div>
  );
}

export default VerListas;
