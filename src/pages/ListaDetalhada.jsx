import { useParams, Link } from "react-router-dom";
import { TrashIcon, Check, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function ListaDetalhada() {
  let params = useParams();
  const [listas, setListas] = useState(() => {
    return JSON.parse(localStorage.getItem("Listas")) || [];
  });

  const lista = listas.find((lista) => lista.id === params.listaId);

  if (!listas || !lista) {
    return (
      <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-2xl shadow-md border border-zinc-100 text-center space-y-4">
        <h2 className="text-xl font-semibold text-zinc-800">Lista não encontrada</h2>
        <p className="text-zinc-500">Você não tem nenhuma lista ou esta lista não existe.</p>
        <Link
          to="/VerListas"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para Listas
        </Link>
      </div>
    );
  }

  function deleteProduto(id) {
    const listasAtualizadas = listas.map((listaItem) => {
      if (listaItem.id === params.listaId) {
        return {
          ...listaItem,
          produtos: listaItem.produtos.filter((produto) => produto.id !== id),
        };
      }
      return listaItem;
    });

    setListas(listasAtualizadas);
    localStorage.setItem("Listas", JSON.stringify(listasAtualizadas));
  }

  function completeProduto(id) {
    const listasAtualizadas = listas.map((listaItem) => {
      if (listaItem.id === params.listaId) {
        return {
          ...listaItem,
          produtos: listaItem.produtos.map((produto) => {
            if (produto.id === id) {
              const currentStatus = produto.isCompleted !== undefined ? produto.isCompleted : !!produto.isComplete;
              return {
                ...produto,
                isCompleted: !currentStatus,
                isComplete: !currentStatus,
              };
            }
            return produto;
          }),
        };
      }
      return listaItem;
    });

    setListas(listasAtualizadas);
    localStorage.setItem("Listas", JSON.stringify(listasAtualizadas));
  }

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 space-y-6">
      <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
        <Link
          to="/VerListas"
          className="p-2 hover:bg-zinc-100 rounded-full text-zinc-500 hover:text-zinc-800 transition-colors"
          title="Voltar para listas"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-bold text-zinc-800 truncate">
          {lista.nomeLista}
        </h1>
      </div>

      {lista.produtos.length === 0 ? (
        <div className="text-center py-8 text-zinc-400">
          Nenhum produto nesta lista.
        </div>
      ) : (
        <ul className="space-y-2">
          {lista.produtos.map((produto) => {
            const isDone = produto.isCompleted || produto.isComplete;
            return (
              <li
                key={produto.id}
                className="flex justify-between items-center bg-zinc-50 border border-zinc-100 w-full p-3 rounded-xl hover:bg-zinc-100/30 transition-colors"
              >
                <button
                  onClick={() => completeProduto(produto.id)}
                  className="flex items-center gap-3 flex-1 text-left group cursor-pointer"
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isDone
                        ? "bg-red-600 border-red-600"
                        : "border-zinc-300 group-hover:border-red-500"
                    }`}
                  >
                    {isDone && <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />}
                  </div>
                  <span
                    className={`text-sm transition-all duration-200 ${
                      isDone
                        ? "line-through text-zinc-400"
                        : "text-zinc-800 font-medium"
                    }`}
                  >
                    {produto.produtoNome}
                  </span>
                </button>
                <button
                  onClick={() => deleteProduto(produto.id)}
                  className="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  title="Excluir produto"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

