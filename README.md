# Catálogo de Livros

Aplicação feita em React que busca livros na API da Open Library. Dá pra pesquisar pelo título e os resultados aparecem em cards com capa, autor e ano de publicação.

## Tecnologias utilizadas

- React
- Vite
- Tailwind CSS
- API da Open Library

## Como instalar e executar

1. Clonar o repositório
2. Rodar `npm install`
3. Rodar `npm run dev`
4. Abrir o endereço que aparece no terminal (normalmente http://localhost:5173)

## API utilizada

Open Library Search API

Endpoint: https://openlibrary.org/search.json?q=termo

## Estrutura do projeto

- src/components: ItemCard, ItemList, SearchForm e LoadingSpinner
- src/hooks: useFetch (custom hook para requisições)
- src/services: api.js (URL da API e função da capa)
- src/pages: Home (página principal)
- src/App.jsx