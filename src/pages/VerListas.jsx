import { useState } from "react";
import Listas from "../components/Listas";

function VerListas() {
  const [listasCadastradas, setListasCadastradas] = useState(() => {
    return JSON.parse(localStorage.getItem("Listas")) || [];
  });

  function deleteLista(id) {

    console.log(newLists);
    setListasCadastradas(newLists);

    localStorage.setItem("Listas", JSON.stringify(newLists));
  }

  return (
    <div className="w-300 mx-auto">
      <h1 className="text-center p-4 text-2xl">
        Veja as suas listas cadastradas:
      </h1>
      <Listas listasCadastradas={listasCadastradas} deleteLista={deleteLista} />
    </div>
  );
}

export default VerListas;
