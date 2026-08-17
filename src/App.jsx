import Button from "./components/Button";

function App() {
  return (
    <div className="w-150 mx-auto">
      <h1 className="text-center p-4 text-2xl">Lista de compras</h1>
      <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col items-center">
        <Button conteudo={"Ver Listas"} redirect={"/VerListas"} />
        <Button conteudo={"Nova Lista"} redirect={"/NovaLista"} />
      </div>
    </div>
  );
}

export default App;
