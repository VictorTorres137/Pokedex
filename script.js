
const btok = document.querySelector('#btok')
const imagemPokemon = document.querySelector('#imagemPokemon')
// const pokemon = document.querySelector('#pokemon').value
const pokemon = ''

function transformaJson (response){
    return response.json()
}

function printDados (dados){
 
  return dados.sprites.other.dream_world.front_default
}

function mostraImagem(imagem){
  
  imagemPokemon.src = imagem
}

function printErro (dados){
  console.log('Erro')
}


btok.onclick = () => 

  pokemon = document.querySelector('#pokemon').value


  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(transformaJson)
    .then(printDados)
    .then(mostraImagem)
    .catch(printErro)


