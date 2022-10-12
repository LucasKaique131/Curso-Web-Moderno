function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve()
        }, tempo)
    })
} 

esperarPor(2000)
    .then(() => console.log('Executanto promise...1'))
    .then(esperarPor)
    .then(() => console.log('Executanto promise...2'))
    .then(esperarPor)
    .then(() => console.log('Executanto promise...3'))

    function retornarValor() 
    {
        return new Promise(resolver => {
            setTimeout(() => resolver(10), 5000)
        })
    }

async function executar() {
    let valor = await retornarValor()
        await esperarPor(1500)
        console.log(`Async/await ${valor}...`)

        await esperarPor(1500)
        console.log(`Async/await ${valor +1}...`)

        await esperarPor(1500)
        console.log(`Async/await ${valor +2}...`)
}
    executar()