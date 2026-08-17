import { useParams } from "react-router-dom";

export default function ListaDetalhada() {
  let params = useParams();
  return (
    <div className="w-150 mx-auto">
      <h1 className="text-center p-4 text-2xl">
        Aqui você vê a lista detalhada
      </h1>
      <h2>Visualizando: {params.listaId}</h2>
    </div>
  );
}
