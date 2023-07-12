import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ clientes, setClientes, cliente, setCliente }) => {
  const [name, setName] = useState('');
  const [lastname, setLastame] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [comment, setComment] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(cliente).length > 0) {
      setName(cliente.name);
      setLastame(cliente.lastname);
      setAddress(cliente.address);
      setEmail(cliente.email);
      setRegistrationDate(cliente.registrationDate);
      setComment(cliente.comment);
    }
  }, [cliente])

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = new Date().getTime();
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //validación de formulario
    if([name, lastname, address, email, registrationDate, comment].includes('')){
      console.log('Hay al menos un campo vacio')
      setError(true)
      return;
    }
    setError(false)

    // Objeto de Clientes
    const newClient = {
      name,
      lastname,
      address,
      email,
      registrationDate,
      comment,
    }

    if(cliente.id) {
      // Editar
      newClient.id = cliente.id
      const clientsUpdate = clientes.map( clienteState => clienteState.id === cliente.id ? newClient : clienteState )
      setClientes(clientsUpdate)
      setCliente({})

    } else {
      // Nuevo
      newClient.id = generateId();
      setClientes([...clientes, newClient])
    }
    
  

    // Limpiar el formulario
    setName('');
    setLastame('');
    setAddress('');
    setEmail('');
    setRegistrationDate('');
    setComment('');

    }
    
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Clientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Agregar Clientes {''}
        <span className="text-indigo-600 font-bold">Administrar</span>
      </p>

      <form
        onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg px-5 py-10 mb-10">
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className="mb-5">
          <label htmlFor="name" className="block text-grey-700 uppercase font-bold">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="lastname" className="block text-grey-700 uppercase font-bold">
            Apellido
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Apellido"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={lastname}
            onChange={(e) => setLastame(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="address" className="block text-grey-700 uppercase font-bold">
            Dirección
          </label>
          <input
            id="address"
            type="text"
            placeholder="Dirección"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-grey-700 uppercase font-bold">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="registrationDate" className="block text-grey-700 uppercase font-bold">
            Fecha alta
          </label>
          <input
            id="registrationDate"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={registrationDate}
            onChange={(e) => setRegistrationDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="comment" className="block text-grey-700 uppercase font-bold">
            Comentarios
          </label>
          <textarea
            id="comment"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <input 
        type="submit" 
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md" 
        value={ cliente.id ? "Editar Cliente" : "Agregar Cliente"}
        />
      </form >
    </div >
  )
}

export default Formulario