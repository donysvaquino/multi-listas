import { Link } from "react-router-dom";

function Button({ conteudo, redirect }) {
  return (
    <div>
      <Link to={redirect}>{conteudo}</Link>
    </div>
  );
}

export default Button;
