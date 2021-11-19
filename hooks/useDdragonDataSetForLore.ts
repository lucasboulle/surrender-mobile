import React from "react"

export const useDdragonDataSetForLore = () => {
  const [success, setSuccess] = React.useState<any>()
  const [error, setError] = React.useState<any>()
  const [isLoading, setLoading] = React.useState(false)


  const doRequest = React.useCallback((championId: string) => {
    setLoading(true)
    setError(undefined)
    setSuccess(undefined)

    const url = new URL(`${championId}.json`, `http://ddragon.leagueoflegends.com/cdn/11.19.1/data/pt_BR/champion`)

    fetch(url.href)
      .then(async (response) => { setSuccess(await response.json()) })
      .catch(setError).finally(() => {
        setLoading(false)
      })
  }, [])

  return [success, error, isLoading, doRequest]
}
