import { useState } from "react";
import Lista from "./Lista";
import AddProduto from "../components/AddProduto";
import { v4 } from "uuid";

function NovaLista() {
  const [lista, setLista] = useState({
    id: 0,
    name: "Compra do Mês",
    produtos: [
      {
        id: 0,
        produtoNome: "Banana",
        isCompleted: false,
      },
      {
        id: 1,
        produtoNome: "Feijão",
        isCompleted: false,
      },
      {
        id: 2,
        produtoNome: "Arroz",
        isCompleted: false,
      },
    ],
  });

  function submitProduto(nome) {
    const newProduct = {
      id: v4(),
      produtoNome: nome,
      isCompleted: false,
    };

    return setLista({ ...lista, produtos: [...lista.produtos, newProduct] });
  }

  function deleteProduto(id) {
    const newList = lista.produtos.filter((produto) => produto.id !== id);

    return setLista({ ...lista, produtos: newList });
  }

  return (
    <div>
      <h1>Nova lista de compras</h1>
      <AddProduto submitProduto={submitProduto} />
      <Lista lista={lista} deleteProduto={deleteProduto} />
    </div>
  );
}

export default NovaLista;
