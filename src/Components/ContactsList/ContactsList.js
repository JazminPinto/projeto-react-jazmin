import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ContactsList.css";
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
    <div className="lista-de-contatos">
      <h1>
        <i>Lista de contatos</i>
      </h1>

      {contatos.map((contato) => {
        return (
          <div className="cartao-contato" key={contato.id}>
            <ul>
              <li>🕵 {contato.nome}</li>
              <li>✉ {contato.email}</li>
              <li>📞 {contato.telefone}</li>
            </ul>
            <div className="link">
              <Link to={`/editar/${contato.id}` }>
                <Button
                  variant="outline-success"
                  size="sm"
                  className="botoes-lista"
                >
                  Editar ✅{" "}
                </Button>
              </Link>
              <br />
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => mostrarModal(contato.id)}
                className="botoes-lista"
              >
                Apagar ❌
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
          Tem certeza ❔ <br/> Tem certeza mesmo❓❓ <br/> Esta informação não poderá ser recuperada❕❗. <br/> 👀
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
      {/*Modal se utiliza para abrir una nova janela tipo alert onde ele vai ter Header, Body e Footer */}
    </div>
  );
}
