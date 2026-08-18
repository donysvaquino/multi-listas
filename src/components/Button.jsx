import { Link } from "react-router-dom";

function Button({ conteudo, redirect, conteudoProps, variant = "primary" }) {
  const baseStyle = "w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 text-center flex items-center justify-center cursor-pointer active:scale-[0.98]";
  
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white shadow-sm shadow-red-100",
    secondary: "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200/50",
    outline: "bg-transparent border border-red-200 hover:bg-red-50 text-red-600"
  };

  return (
    <Link
      to={redirect}
      className={`${baseStyle} ${variants[variant] || variants.primary}`}
      {...conteudoProps}
    >
      {conteudo}
    </Link>
  );
}

export default Button;
