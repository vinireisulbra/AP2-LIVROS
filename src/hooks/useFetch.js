import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(!!url)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return
    let cancelado = false

    setLoading(true)
    setError(null)

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Erro ' + res.status)
        return res.json()
      })
      .then(json => {
        if (!cancelado) setData(json)
      })
      .catch(err => {
        if (!cancelado) setError(err.message)
      })
      .finally(() => {
        if (!cancelado) setLoading(false)
      })

    return () => {
      cancelado = true
    }
  }, [url])

  return { data, loading, error }
}