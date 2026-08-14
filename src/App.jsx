import Button from "./components/Button";

function App() {
  return (
    <div>
      <h1>Lista de compras</h1>
      <Button conteudo={"Ver Listas"} redirect={"/VerListas"} />
      <Button conteudo={"Nova Lista"} redirect={"/NovaLista"} />
    </div>
  );
}

export default App;
