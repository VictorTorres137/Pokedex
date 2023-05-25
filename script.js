
const btok = document.querySelector('#btok')
const imagemPokemon = document.querySelector('#imagemPokemon')
const tipos = document.querySelector('#tipos')
// const pokemon = document.querySelector('#pokemon').value
// const pokemon = ''


let listaF = []


function geraFraquesas (dados){
  
  listaF = []

  for (item of dados.types){
     
    fetch(item.type.url)
    .then(transformaJson)
    .then(lista)
    .then(printLista)
    .catch()
  }

  return listaFraq
}

function transformaJson (response){
    return response.json()
}

function mostraImagem(dados){
  imagemPokemon.src = dados.sprites.other.dream_world.front_default
  return dados
}

function mostraTipos(dados){
  

  let listaTipos = []
  let htmlTipos = ''
  for (item of dados.types){
    listaTipos.push(item.type.name)
    htmlTipos += `<div class="tipo ${item.type.name}"> ${item.type.name} </div>`
  }

  tipos.innerHTML = htmlTipos

  // console.log(listaTipos)
  return dados
}

function lista (dados){

  let listGeral = []

  let list2x = []
  let list0x = []
  let list05x = []
  
  // console.log(dados.damage_relations)
  // console.log(dados.damage_relations.double_damage_from)
  // console.log(dados.damage_relations.half_damage_from)
  // console.log(dados.damage_relations.no_damage_from)

  for (item of dados.damage_relations.double_damage_from){
   list2x.push(item.name)
  }
  for (item of dados.damage_relations.half_damage_from){
    list05x.push(item.name)
  }
  for (item of dados.damage_relations.no_damage_from){
    list0x.push(item.name)
  }

  listGeral.push(list2x)
  listGeral.push(list0x)
  listGeral.push(list05x)

  listaF.push(listGeral)

  const listaFraq = listaF
  
  return listaFraq
}

function printLista(item){
  console.log(item)
}


function printErro (dados){
  console.log('Erro')
}


btok.onclick = () => {

  const pokemon = document.querySelector('#pokemon').value

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(transformaJson)
    .then(mostraImagem)
    .then(mostraTipos)
    .then(geraFraquesas)
    .catch(printErro)
}

