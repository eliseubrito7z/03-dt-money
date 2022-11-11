# add search in url of server-json

1 - the function loadTransactions change for fetchTransaction
2 - the function can receive the parameter <query?: string>
3 - create a <const url>, her receive new URL('address of server-json')
4 - if the function receive the parameter, <url.searchParams.append('q', query)>
5 - the new fetch as the const <url>
6 - in SearchForm, the async function handleSearchTransactions run <fetchTransaction>, passing the argument <data.query>
