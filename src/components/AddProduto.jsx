import { useState } from "react";
import { Plus } from "lucide-react";

function AddProduto({ submitProduto }) {
  const [produto, setProduto] = useState("");
  return (
    <div className="p-5 bg-white rounded-2xl border border-zinc-100 shadow-sm flex flex-col gap-3">
      <div className="text-sm font-semibold text-zinc-700">Passo 1: Adicione itens à lista</div>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Ex: Arroz 5kg"
          className="border border-zinc-200 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 px-4 py-3 rounded-xl text-sm transition-all text-zinc-800 placeholder-zinc-400"
          value={produto}
          onChange={(event) => setProduto(event.target.value)}
        />

        <button
          onClick={() => {
            if (!produto.trim()) return alert("Preencha o nome do produto!");
            submitProduto(produto);
            setProduto("");
          }}
          className="bg-red-50 hover:bg-red-100/80 text-red-700 py-3 px-4 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Adicionar Item
        </button>
      </div>
    </div>
  );
}

export default AddProduto;

