import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { buildSearchUrl } from '../services/api'
import SearchForm from '../components/SearchForm'
import ItemList from '../components/ItemList'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Home() {
  const [termo, setTermo] = useState('harry potter')
  const { data, loading, error } = useFetch(buildSearchUrl(termo))
  const livros = data ? data.docs : []

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="mx-auto max-w-6xl p-4">
        <h1 className="mb-4 text-3xl font-bold text-blue-700">Catálogo de Livros</h1>
        <SearchForm onBuscar={setTermo} />

        <div className="mt-6">
          {loading && <LoadingSpinner />}
          {error && <p className="text-center text-red-600">Erro ao buscar: {error}</p>}
          {!loading && !error && <ItemList livros={livros} />}
        </div>
      </main>
    </div>
  )
}