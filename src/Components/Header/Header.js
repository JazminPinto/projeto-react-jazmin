import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>Header</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/criar">
        <button>Criar contato</button>
      </Link>
    </header>
  );
}
