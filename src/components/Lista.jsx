import { TrashIcon } from "lucide-react";

function Lista({ lista, deleteProduto }) {
  return (
    <ul className="space-y-2">
      {lista.map((produto) => (
        <li
          key={produto.id}
          className="flex justify-between items-center bg-zinc-50 border border-zinc-100 w-full p-3 rounded-xl hover:bg-zinc-100/30 transition-colors"
        >
          <span className="text-sm font-medium text-zinc-800 px-1">
            {produto.produtoNome}
          </span>
          <button
            onClick={() => deleteProduto(produto.id)}
            className="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
            title="Excluir item"
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Lista;

