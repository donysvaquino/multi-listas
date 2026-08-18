import { useState } from "react";
import Lista from "../components/Lista";
import AddProduto from "../components/AddProduto";
import AddLista from "../components/AddLista";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, PlusCircle } from "lucide-react";

function NovaLista() {
  const [lista, setLista] = useState([]);
  const navigate = useNavigate();

  function submitProduto(nome) {
    const newProduct = {
      id: uuidv4(),
      produtoNome: nome,
      isCompleted: false,
      isComplete: false,
    };

    setLista([...lista, newProduct]);
  }

  function submitNovaLista(nome, produtosLista) {
    const newList = {
      id: uuidv4(),
      nomeLista: nome,
      produtos: produtosLista,
    };

    setLista([]);

    const currentLists = JSON.parse(localStorage.getItem("Listas")) || [];
    currentLists.push(newList);
    localStorage.setItem("Listas", JSON.stringify(currentLists));

    navigate("/VerListas");
  }

  function deleteProduto(id) {
    const newList = lista.filter((produto) => produto.id !== id);
    setLista(newList);
  }

  return (
    <div className="max-w-md mx-auto my-10 px-4 space-y-6">
      <div className="flex items-center gap-3 border-b border-zinc-150 pb-5">
        <Link
          to="/"
          className="p-2 hover:bg-zinc-100 rounded-full text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer"
          title="Voltar"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-extrabold text-zinc-900 tracking-tight flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-red-600" />
          Criar Lista
        </h1>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <AddLista submitNovaLista={submitNovaLista} produtosLista={lista} />
          <AddProduto submitProduto={submitProduto} />
        </div>

        <div className="space-y-2 pt-2">
          <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Itens Adicionados ({lista.length})
          </h2>
          {lista.length === 0 ? (
            <div className="text-center py-8 bg-zinc-50 border border-dashed border-zinc-200 rounded-2xl text-zinc-400 text-sm">
              Adicione produtos acima para montar sua lista.
            </div>
          ) : (
            <Lista lista={lista} deleteProduto={deleteProduto} />
          )}
        </div>
      </div>
    </div>
  );
}

export default NovaLista;

