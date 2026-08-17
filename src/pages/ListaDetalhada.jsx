import { useParams } from "react-router-dom";
import { TrashIcon } from "lucide-react";

export default function ListaDetalhada() {
  let params = useParams();
  const listas = JSON.parse(localStorage.getItem("Listas"));
  if (!listas) return <div>"Você não tem nenhuma lista"</div>;
  const lista = listas.find((lista) => (lista.id = params.listaId));

  return (
    <div className="p-6 my-10 bg-slate-200 rounded-md mx-auto shadow space-y-4 w-150">
      <h1 className="text-center p-4 text-2xl font-bold text-slate-800 border-b border-slate-300 ">
        {lista.nomeLista}
      </h1>
      <ul className="space-y-2">
        {lista.produtos.map((produto) => (
          <li
            key={produto.id}
            className="flex justify-between items-center bg-slate-400 w-full text-left text-white p-2 rounded-md"
          >
            {produto.produtoNome}
            <button className="bg-slate-400 p-2 rounded-md text-white">
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
