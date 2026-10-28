import { useState } from 'react'

export default function SearchForm({ onBuscar }) {
  const [texto, setTexto] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (texto.trim()) onBuscar(texto.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Buscar livro pelo título..."
        className="flex-1 rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="rounded bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700"
      >
        Buscar
      </button>
    </form>
  )
}