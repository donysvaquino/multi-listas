import { useState } from "react";
import Lista from "../components/Lista";
import AddProduto from "../components/AddProduto";
import AddLista from "../components/AddLista";
import { v4 } from "uuid";

function NovaLista() {
  const [lista, setLista] = useState([]);

  function submitProduto(nome) {
    const newProduct = {
      id: v4(),
      produtoNome: nome,
      isCompleted: false,
    };

    setLista([...lista, newProduct]);
  }

  function submitNovaLista(nome, produtosLista) {
    const newList = {
      id: v4(),
      nomeLista: nome,
      produtos: produtosLista,
    };

    setLista([]);
    console.log(lista);

    if (!localStorage.getItem("Listas")) {
      localStorage.setItem("Listas", JSON.stringify([newList]));
    } else {
      const updateList = JSON.parse(localStorage.getItem("Listas"));
      updateList.push(newList);
      localStorage.setItem("Listas", JSON.stringify(updateList));
    }
  }

  function deleteProduto(id) {
    const newList = lista.filter((produto) => produto.id !== id);

    console.log(newList);
    setLista(newList);
  }

  if (!lista || lista.length === 0) {
    return (
      <div className="w-150 mx-auto">
        <h1 className="text-center p-4 text-2xl">Nova lista de compras</h1>
        <AddLista submitNovaLista={submitNovaLista} produtosLista={lista} />
        <AddProduto submitProduto={submitProduto} />
        <h1>Lista Vazia</h1>
      </div>
    );
  } else {
    return (
      <div className="w-150 mx-auto">
        <h1 className="text-center p-4 text-2xl">Nova lista de compras</h1>
        <AddLista submitNovaLista={submitNovaLista} produtosLista={lista} />
        <AddProduto submitProduto={submitProduto} />
        <Lista lista={lista} deleteProduto={deleteProduto} />
      </div>
    );
  }
}

export default NovaLista;
