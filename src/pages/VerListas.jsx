import { useEffect, useState } from "react";
import Lista from "../components/Lista";

function VerListas({ listas, deleteListas }) {
  const [listasCadastradas, setListasCadastradas] = useState();

  useEffect(() => {
    const listas = JSON.parse(localStorage.getItem("Listas"));
    setListasCadastradas(listas);
  }, []);

  return (
    <div>
      <h1>Veja as suas listas cadastradas:</h1>
    </div>
  );
}

export default VerListas;
