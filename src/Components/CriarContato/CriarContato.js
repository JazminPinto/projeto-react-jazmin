import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./CriarContato.css";

export default function CriarContato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const novoContato = async () => {
    const contatoPost = {
      nome,
      email,
      telefone,
    };

    await fetch("http://localhost:3004/contacts", {
      method: "POST",
      body: JSON.stringify(contatoPost),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  };

  return (
    <div className="formulario">
      <form>
        <div className="dados">
          <span>Nome: </span>
          <label>
            <input
              type="text"
              placeholder="Ana Catalina"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
        </div>
        <div className="dados">
          <span>Telefone: </span>
          <label>
            <input
              type="text"
              placeholder="(xx) xxxxx xxxx"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </label>
        </div>
        <div className="dados">
          <span>Email: </span>
          <label>
            <input
              type="text"
              placeholder="ana@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
      </form>
      <Link to="/">
        <Button
          variant="success"
          onClick={novoContato}
          className="botao-adicionar"
        >
          Adicionar
        </Button>
      </Link>
    </div>
  );
}
