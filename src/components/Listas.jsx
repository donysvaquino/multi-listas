import Button from "../components/Button";

function Listas({ listasCadastradas }) {
  return (
    <div className="my-5 flex gap-5 w-300">
      {listasCadastradas &&
        listasCadastradas.map((lista) => (
          <div
            key={lista.id}
            className="p-6 bg-slate-200 rounded-md shadow space-y-4 w-75"
          >
            <div className="text-xl font-bold text-slate-800 border-b border-slate-300 pb-2">
              {lista.nomeLista}
            </div>
            <ul className="space-y-2">
              {lista.produtos.map((produto) => (
                <li
                  key={produto.id}
                  className="flex justify-between items-center bg-slate-400 w-full text-left text-white p-2 rounded-md"
                >
                  {produto.produtoNome}
                </li>
              ))}
              <Button
                conteudo={"Ver Lista"}
                redirect={`/ListaDetalhada/${lista.id}`}
              />
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Listas;
