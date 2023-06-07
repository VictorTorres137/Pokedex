
const btok = document.querySelector('#btok')
const imagemPokemon = document.querySelector('#imagemPokemon')
const tipos = document.querySelector('#tipos')
// const pokemon = document.querySelector('#pokemon').value
// const pokemon = ''

const listaTiposGeral = [
  { tipo: 'normal', dano: 1 },
  { tipo: 'fire', dano: 1 },
  { tipo: 'water', dano: 1 },
  { tipo: 'grass', dano: 1 },
  { tipo: 'flying', dano: 1 },
  { tipo: 'poison', dano: 1 },
  { tipo: 'electric', dano: 1 },
  { tipo: 'ground', dano: 1 },
  { tipo: 'rock', dano: 1 },
  { tipo: 'psychic', dano: 1 },
  { tipo: 'ice', dano: 1 },
  { tipo: 'bug', dano: 1 },
  { tipo: 'ghost', dano: 1 },
  { tipo: 'steel', dano: 1 },
  { tipo: 'dragon', dano: 1 },
  { tipo: 'dark', dano: 1 },
  { tipo: 'fairy', dano: 1 } 
]


let listaF = []



function geraFraquesas (dados){

  function multtipos (item){
    let listRelevantes = []

    for (tipo of item.damage_relations.double_damage_from){
      listRelevantes.push({tipo:tipo["name"], dano:2})
    }
    for (tipo of item.damage_relations.half_damage_from){
      listRelevantes.push({tipo:tipo["name"], dano:0.5})
    }
    for (tipo of item.damage_relations.no_damage_from){
      listRelevantes.push({tipo:tipo["name"], dano:0})
    }

    return listRelevantes
  }

  let rel1
  let rel2 = false
  let listaGeral = [
    {"tipo":"normal", dano: 1},
    {"tipo":"fire", dano: 1},
    {"tipo":"water", dano: 1},
    {"tipo":"grass", dano: 1},
    {"tipo":"flying", dano: 1},
    {"tipo":"fighting", dano: 1},
    {"tipo":"poison", dano: 1},
    {"tipo":"electric", dano: 1},
    {"tipo":"ground", dano: 1},
    {"tipo":"rock", dano: 1},
    {"tipo":"psychic", dano: 1},
    {"tipo":"ice", dano: 1},
    {"tipo":"bug", dano: 1},
    {"tipo":"ghost", dano: 1},
    {"tipo":"steel", dano: 1},
    {"tipo":"dragon", dano: 1},
    {"tipo":"dark", dano: 1},
    {"tipo":"fairy", dano: 1}
  ]
  


  let tipos = []

  const tipo1 = fetch(`${dados.types[0].type["url"]}`).then(transformaJson)
  tipos.push(tipo1)

  if (dados.types[1]){
    const tipo2 = fetch(`${dados.types[1].type["url"]}`).then(transformaJson)
    tipos.push(tipo2)
    // console.log(tipo2)
  }
  // na lista tipos tem as promisses dos tipos do pokemon
  
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



function printErro (dados){
  console.log('Erro', dados)
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