in TransactionsContext, switch the import of createContext, change for the  createContext of use-context-selector

in the files using useContext, change for useContextSelector

# useContextSelector

```ts
useContextSelector(ContextFile, (context) => {
  return {
    function for watch changes
  }
})
```
```ts
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
```
# Impedindo que um componente renderize porque um hook mudou

*Aplicando useCallback*

1 - no Context, substituir a function que está sendo utilizada no componente por uma constante

2 - essa const recebe a antiga function como uma arrow function async
3 - colocar essa arrow function dentro de um useCallback

# Impedindo que um componente renderize porque o pai mudou

*Aplicando MEMO*
