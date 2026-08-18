import Button from "../components/Button";
import { TrashIcon } from "lucide-react";

function Listas({ listasCadastradas, deleteLista }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      {listasCadastradas &&
        listasCadastradas.map((lista) => {
          const previewProdutos = lista.produtos.slice(0, 3);
          const remainingCount = lista.produtos.length - 3;

          return (
            <div
              key={lista.id}
              className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-zinc-200/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <h3 className="font-bold text-zinc-800 text-base truncate flex-1 pr-2" title={lista.nomeLista}>
                    {lista.nomeLista}
                  </h3>
                  <button
                    onClick={() => deleteLista(lista.id)}
                    className="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    title="Excluir lista"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>

                <ul className="space-y-2 py-4">
                  {previewProdutos.map((produto) => {
                    const isDone = produto.isCompleted || produto.isComplete;
                    return (
                      <li
                        key={produto.id}
                        className="text-sm text-zinc-600 flex items-center gap-2 truncate"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isDone ? 'bg-zinc-300' : 'bg-red-500'}`} />
                        <span className={`truncate ${isDone ? 'line-through text-zinc-400' : 'font-medium text-zinc-700'}`}>
                          {produto.produtoNome}
                        </span>
                      </li>
                    );
                  })}
                  {remainingCount > 0 && (
                    <li className="text-xs text-zinc-400 font-medium pl-3.5 italic">
                      + {remainingCount} {remainingCount === 1 ? 'outro item' : 'outros itens'}
                    </li>
                  )}
                  {lista.produtos.length === 0 && (
                    <li className="text-sm text-zinc-400 italic">
                      Sem produtos adicionados.
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-2">
                <Button
                  conteudo={"Ver Detalhes"}
                  redirect={`/ListaDetalhada/${lista.id}`}
                  variant="outline"
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Listas;

