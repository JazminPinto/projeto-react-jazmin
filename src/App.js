import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactsList from "./Components/ContactsList/ContactsList";
import CriarContato from "./Components/CriarContato/CriarContato";
import EditarContacto from "./Components/EditarContato/EditarContato";
import "./Components/Header/Header";
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
//App.js vai ser nosso arquivo principal

function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={ <ContactsList />}/>
          <Route path="/criar" element={<CriarContato/>} />
          <Route path="/editar/:id" element={<EditarContacto/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
