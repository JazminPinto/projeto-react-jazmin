import { useState } from "react";
import { Link } from "react-router-dom";

export default function CriarContato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const novoContato = async () => {

    const contatoPost = {
        nome,
        email,
        telefone
    }

    await fetch('http://localhost:3004/contacts', {
            method: 'POST',
            body: JSON.stringify(contatoPost),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
  };

  return (
    <div>
      <form>
        <span>Nome:</span>
        <label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <span>Telefone:</span>
        <label>
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </label>
        <br />
        <span>Email:</span>
        <label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
      </form>
      <Link to='/'>
      <button onClick={novoContato}>Adicionar</button>
      </Link>
    </div>
  );
}
