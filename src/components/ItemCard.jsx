import { useState } from 'react'
import { getCoverUrl } from '../services/api'

export default function ItemCard({ livro }) {
  const [erroImagem, setErroImagem] = useState(false)
  const capa = getCoverUrl(livro.cover_i)

  return (
    <div className="flex flex-col rounded-lg bg-white p-4 shadow">
      {capa && !erroImagem ? (
        <img
          src={capa}
          alt={livro.title}
          loading="lazy"
          onError={() => setErroImagem(true)}
          className="mb-3 h-64 w-full rounded object-contain"
        />
      ) : (
        <div className="mb-3 flex h-64 w-full items-center justify-center rounded bg-gray-200 text-gray-500">
          Sem capa
        </div>
      )}
      <h3 className="font-semibold">{livro.title}</h3>
      <p className="text-sm text-gray-600">
        {livro.author_name ? livro.author_name[0] : 'Autor desconhecido'}
      </p>
      <p className="text-sm text-gray-500">{livro.first_publish_year ?? 'Ano desconhecido'}</p>
    </div>
  )
}