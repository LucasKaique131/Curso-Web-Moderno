setTimeout(function() {
    console.log('Executando callback....')

    setTimeout(function(){
        console.log('Executando callback...')
        setTimeout(function(){
            console.log('Executando callback...')
        }, 200)
    }, 200)
}, 200)

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log('Executanto promise...')
            resolve()
        }, tempo)
    })
} 

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)