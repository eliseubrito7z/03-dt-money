# Use

the Axios will replace the fetch, fetch is native of browser
no is possible change the "localhost:3000" in fetchAPI

# Localization

./folder lib in src -> axios.ts

# baseURL

1 - export a const api, her receive axios.create, with a object inside
2 - inside the object, her can receive a baseURL
*baseURL is a address of api (server-json)*
3 - in the context, on the oldest const api, we passed only the rest of address

```ts //before
  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3000/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data)
  }
```

```ts //after
  async function fetchTransactions(query?: string) {
                    // axios.method /address after address API
    const response = await api.get('/transactions', {
      // obj for configuration
      params: {
        q: query,
      },
    })

    setTransactions(response.data)
  }
```
