import { TrashIcon } from "lucide-react";

function Lista({ lista, deleteProduto }) {
  return (
    <div className="my-5">
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {lista.map((produto) => (
          <li
            key={produto.id}
            className="flex content-between bg-slate-400 w-full text-left text-white p-2 rounded-m2"
          >
            {produto.produtoNome}
            <button
              onClick={() => deleteProduto(produto.id)}
              className="bg-slate-400 p2 rounded-md text-white"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
