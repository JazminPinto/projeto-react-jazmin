import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

export default function ContactsList() {
  const [contatos, setContatos] = useState([]);
  const [id, setId] = useState("");

  const [show, setShow] = useState(false);
  const fecharModal = () => setShow(false);
  const mostrarModal = (key) => {
    setId(key);
    setShow(true);
  };

  useEffect(() => {
    atualizarLista();
  }, []);

  const atualizarLista = () => {
    fetch("http://localhost:3004/contacts")
      .then((response) => response.json())
      .then((data) => setContatos(data));
  };

  const apagarContato = async () => {
    await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "DELETE",
    });
    atualizarLista();
    fecharModal();
  };

  return (
    <div>
      <h1>Lista de contatos</h1>

      {contatos.map((contato) => {
        return (
          <div key={contato.id}>
            <ul>
              <li>{contato.nome}</li>
              <li>{contato.email}</li>
              <li>{contato.telefone}</li>
            </ul>
            <div>
              <Link to={`/editar/${contato.id}`}>
                <Button variant="warning">Editar</Button>
              </Link>
              <Button
                variant="danger"
                size="sm"
                onClick={() => mostrarModal(contato.id)}
              >
                Apagar
              </Button>
            </div>
          </div>
        );
      })}

      <Modal show={show} onHide={fecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Apagar contato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza? esta informação não poderá ser recuperada
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={fecharModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={apagarContato}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
