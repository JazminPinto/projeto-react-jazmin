import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function EditarContacto() {
  const { id } = useParams();
  const [contatos, setContatos] = useState({});

  const [nome, setNome] = useState(contatos.nome);
  const [telefone, setTelefone] = useState(contatos.telefone);
  const [email, setEmail] = useState(contatos.email);

  useEffect(() => {
    fetch(`http://localhost:3004/contacts/${id}`)
      .then((response) => response.json())
      .then((data) => setContatos(data));
  }, [id]);

  const alterarContato = async () => {

    const contatoPatch = {
        nome,
        email,
        telefone
    }

    await fetch(`http://localhost:3004/contacts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(contatoPatch),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
  };


  return (
    <div>
      <h3>Editar contato</h3>

      <form>
        <span>Nome:</span>
        <label>
          <input
            type="text"
            defaultValue={contatos.nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <span>Telefone:</span>
        <label>
          <input
            type="text"
            defaultValue={contatos.telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </label>
        <br />
        <span>Email:</span>
        <label>
          <input
            type="text"
            defaultValue={contatos.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
      </form>
      <Link to="/">
        <button onClick={alterarContato}>Alterar contato</button>
      </Link>
    </div>
  );
}
