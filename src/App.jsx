import Button from "./components/Button";
import { ShoppingBag } from "lucide-react";

function App() {
  return (
    <div className="max-w-md mx-auto my-16 bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center text-center space-y-6">
      <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 shadow-inner">
        <ShoppingBag className="w-8 h-8" />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
          Minhas Compras
        </h1>
        <p className="text-sm text-zinc-500 max-w-[280px]">
          Organize seus produtos e listas de compras de forma simples e intuitiva.
        </p>
      </div>
      <div className="w-full flex flex-col gap-3 pt-2">
        <Button conteudo={"Ver Listas"} redirect={"/VerListas"} variant="primary" />
        <Button conteudo={"Nova Lista"} redirect={"/NovaLista"} variant="secondary" />
      </div>
    </div>
  );
}

export default App;

