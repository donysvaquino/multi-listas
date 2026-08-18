import { useState } from "react";
import Listas from "../components/Listas";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";

function VerListas() {
  const [listasCadastradas, setListasCadastradas] = useState(() => {
    return JSON.parse(localStorage.getItem("Listas")) || [];
  });

  function deleteLista(id) {
    const newLists = listasCadastradas.filter((lista) => lista.id !== id);
    setListasCadastradas(newLists);
    localStorage.setItem("Listas", JSON.stringify(newLists));
  }

  return (
    <div className="max-w-4xl mx-auto my-10 px-4 space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-150 pb-5">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="p-2 hover:bg-zinc-100 rounded-full text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer"
            title="Voltar para o início"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-extrabold text-zinc-900 tracking-tight flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-red-600" />
            Minhas Listas
          </h1>
        </div>
        <Link
          to="/NovaLista"
          className="bg-red-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-red-700 transition-colors cursor-pointer shadow-sm shadow-red-100 active:scale-[0.98]"
        >
          Criar Lista
        </Link>
      </div>

      {listasCadastradas.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-zinc-100 p-8 space-y-4 shadow-sm">
          <p className="text-zinc-500 font-medium">Você ainda não tem nenhuma lista cadastrada.</p>
          <Link
            to="/NovaLista"
            className="inline-flex bg-red-50 text-red-600 hover:bg-red-100 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
          >
            Criar primeira lista
          </Link>
        </div>
      ) : (
        <Listas listasCadastradas={listasCadastradas} deleteLista={deleteLista} />
      )}
    </div>
  );
}

export default VerListas;

