import Cliente from "./Cliente";

const ListadoClientes = ({ clientes, setCliente, deleteCliente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {clientes && clientes.length ? (
        <>
         <h2 className="font-black text-3xl text-center">Listado de Clientes</h2>
         <p className="text-lg mt-5 text-center mb-10">
           Administración de {''}
           <span className="text-indigo-600 font-bold">Clientes</span>
         </p>
   
         {clientes.map(cliente => (
           <Cliente
             key={cliente.id}
             cliente={cliente}
             setCliente={setCliente}
             deleteCliente={deleteCliente}
           />
         ))}
         </>  
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Clientes</h2>
         <p className="text-lg mt-5 text-center mb-10">
           Agregue Clientes {''}
           <span className="text-indigo-600 font-bold">y se mostraran debajo</span>
         </p>
        </>
      )}

    </div>
  )
}

export default ListadoClientes