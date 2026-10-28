const BASE_URL = 'https://openlibrary.org/search.json'

export function buildSearchUrl(termo) {
  return `${BASE_URL}?q=${encodeURIComponent(termo)}&limit=20&fields=key,title,author_name,first_publish_year,cover_i`
}

export function getCoverUrl(coverId) {
  return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : null
}