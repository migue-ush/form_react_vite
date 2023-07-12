const Error = ({children}) => {
  return (
    <div><div /*className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md"*/
    className="bg-red-100 border border-red-400 text-red-700 text-center uppercase px-4 py-3 mb-10 rounded relative">
    {children}
    </div></div>
  )
}

export default Error