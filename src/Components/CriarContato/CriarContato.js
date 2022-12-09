import { useState } from "react";
import { Link } from "react-router-dom";
//Router = define as rutas de navegaçao em nossa app
import { Button } from "react-bootstrap";
//bootstrap = é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.
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

    //para poder fazer que nosso json funcione devemos colocar no terminal o seguinte codigo 'npx json-server --watch db.json --port 3004 
    //db vai ser o nome de nosso json pode ser qualquer
    //3004 pode ser qualquer mas tem que ser diferente ao principal que vai ser 3000
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
        {/* '/' utilizado para abrir uma nova janela onde vai ter outro formulario */}
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
