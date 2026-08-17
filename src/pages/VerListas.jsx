import { useEffect, useState } from "react";
import Listas from "../components/Listas";

function VerListas() {
  const [listasCadastradas, setListasCadastradas] = useState([]);

  useEffect(() => {
    const listas = JSON.parse(localStorage.getItem("Listas")) || [];
    setListasCadastradas(listas);
  }, []);

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
