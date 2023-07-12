import { useState, useEffect } from 'react';
import Formulario from "./components/Formulario"
import Heather from "./components/Heater"
import ListadoClientes from "./components/ListadoClientes"

function App() {

  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});

  useEffect(() => {
    const getLS = () => {
      const clientesLS = JSON.parse(localStorage.getItem('clientes')) ?? [];
      setClientes(clientesLS);
    }
    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('clientes', JSON.stringify(clientes))
  }, [clientes])

  const deleteCliente = id => {
    const clientsUpdate = clientes.filter(cliente => cliente.id !== id);
    setClientes (clientsUpdate);
  }

  return (
    <div className="container mx-auto mt-20">
      <Heather />
      <div className="mt-12 md:flex">
        <Formulario
          clientes={clientes}
          setClientes={setClientes}
          cliente={cliente}
          setCliente={setCliente}

        />
        <ListadoClientes 
          clientes={clientes}
          setCliente={setCliente}
          deleteCliente={deleteCliente}
          
        />
      </div>
    </div>
  )
}

export default App
