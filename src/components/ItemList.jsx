import ItemCard from './ItemCard'

export default function ItemList({ livros }) {
  if (livros.length === 0) {
    return <p className="text-center text-gray-500">Nenhum livro encontrado.</p>
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {livros.map((livro) => (
        <ItemCard key={livro.key} livro={livro} />
      ))}
    </div>
  )
}