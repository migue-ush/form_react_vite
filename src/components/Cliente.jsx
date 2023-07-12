const Cliente = ({ cliente, setCliente, deleteCliente }) => {

  const { name, lastname, address, email, registrationDate, comment, id } = cliente;

  const handleDelete = () => {
    // A mejorar el aviso con alguna librería
    const respuesta = confirm('¿Desea eliminar este cliente?');

    if (respuesta) {
      deleteCliente(id);
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Apellido: {''}
        <span className="font-normal normal-case">{lastname}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Dirección: {''}
        <span className="font-normal normal-case">{address}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Correo Electrónico: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
        <span className="font-normal normal-case">{registrationDate}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Comentarios: {''}
        <span className="font-normal normal-case">{comment}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setCliente(cliente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={ handleDelete }
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Cliente