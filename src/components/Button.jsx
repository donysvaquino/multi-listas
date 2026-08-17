import { Link } from "react-router-dom";

function Button({ conteudo, redirect }) {
  return (
    <Link
      to={redirect}
      className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium w-50 h-15 flex items-center justify-center"
    >
      {conteudo}
    </Link>
  );
}

export default Button;
