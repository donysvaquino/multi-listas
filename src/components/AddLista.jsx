import { useState } from "react";

function AddLista({ submitNovaLista, produtosLista }) {
  const [novaLista, setNovaLista] = useState("");
  return (
    <div className="p-5 bg-white rounded-2xl border border-zinc-100 shadow-sm flex flex-col gap-3">
      <div className="text-sm font-semibold text-zinc-700">Passo 2: Dê um nome à lista e salve</div>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Ex: Mercado do Mês"
          className="flex-1 border border-zinc-200 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 px-4 py-3 rounded-xl text-sm transition-all text-zinc-800 placeholder-zinc-400"
          value={novaLista}
          onChange={(event) => setNovaLista(event.target.value)}
        />

        <button
          onClick={() => {
            if (!novaLista.trim()) return alert("Preencha o nome da lista!");
            if (produtosLista.length === 0)
              return alert("Adicione pelo menos um produto à lista!");

            submitNovaLista(novaLista, produtosLista);
            setNovaLista("");
          }}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap shadow-sm shadow-red-100"
        >
          Salvar Lista
        </button>
      </div>
    </div>
  );
}

export default AddLista;

