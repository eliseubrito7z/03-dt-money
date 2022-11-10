# Cuidados ao utilizar a API

1 - dentro de onde vai ser usado, chama o metodo
fetch('http://LOCALDOSERVER').then(response => response)

2 - utilizar o passo 1 dentro de um useEffect(), passa o array de dependencias vazio, assim, ele vai executar apenas 1 vez (Ao iniciar a aplicação)

3 - o conteudo vai vir dentro do body da resposta, mas vem como um ReadableStream, então temos que converte-lo para poder usar

4 - para converter de um json par aum obj em js, do primeiro .then, retornamos um response.json(), e após isso, um outro .then()

*NAO COLOCAR UM .THEN DENTRO DE OUTRO .THEN*

# Context API

*NAO UTILIZAR SEMPRE, APENAS QUANDO SERIA PRECISO PASSAR UMA PROPRIEDADE POR MUITOS COMPONENTES*

