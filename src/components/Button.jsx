import { Link } from "react-router-dom";

function Button({ conteudo, redirect, conteudoProps }) {
  return (
    <Link
      to={redirect}
      className="bg-slate-500 w-full text-white px-4 py-2 rounded-md font-medium h-15 flex items-center justify-center"
      props={conteudoProps}
    >
      {conteudo}
    </Link>
  );
}

export default Button;
