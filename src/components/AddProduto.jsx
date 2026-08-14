import { useState } from "react";

function AddProduto({ submitProduto }) {
  const [produto, setProduto] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o Produto"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={produto}
        onChange={(event) => setProduto(event.target.value)}
      />

      <button
        onClick={() => {
          if (!produto.trim()) return alert("Preencha o nome do produto!");
          submitProduto(produto);
          setProduto("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar Produto
      </button>
    </div>
  );
}

export default AddProduto;
