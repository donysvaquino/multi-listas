import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Lista({ lista }) {
  return (
    <div>
      <h1>Nome da lista: {lista.name}</h1>
      <ul>
        {lista.produtos.map((produto) => (
          <li key={produto.id}>
            {produto.produtoNome}
            <button
              onClick={() => lista.deleteProduto(produto.id)}
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
