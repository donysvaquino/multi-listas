import { useState } from "react";

function AddLista({ submitNovaLista, produtosLista }) {
  const [novaLista, setNovaLista] = useState("");
  return (
    <div className="p-6 bg-slate-200 rounded-md shadow flex justify-between">
      <input
        type="text"
        placeholder="Digite o nome da lista"
        className="border border-slate-300 outline-slate-400 px-4 py-2 h-15 rounded-md w-85"
        value={novaLista}
        onChange={(event) => setNovaLista(event.target.value)}
      />

      <button
        onClick={() => {
          if (!novaLista.trim()) return alert("Preencha o nome da lista!");
          submitNovaLista(novaLista, produtosLista);
          setNovaLista("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium w-50 h-15"
      >
        Criar Nova Lista
      </button>
    </div>
  );
}

export default AddLista;
