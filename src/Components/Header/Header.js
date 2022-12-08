import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h2>Agenda de contatos</h2>
      <Link to="/">
        <Button variant="outline-primary" className="botoes-header">Principal</Button>
      </Link>
      <Link to="/criar">
        <Button variant="outline-primary"className="botoes-header">Criar contato</Button>
      </Link>
    </header>
  );
}
