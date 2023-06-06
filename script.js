
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

<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> parent of ac214a8 (Logica Fraquezas)

function geraFraquesas (dados){
  function multtipos (item){
    let listRelevantes = []
    

<<<<<<< HEAD
    for (tipo of item.damage_relations.double_damage_from){
      listRelevantes.push({tipo:tipo["name"], dano:2})
    }
    for (tipo of item.damage_relations.half_damage_from){
      listRelevantes.push({tipo:tipo["name"], dano:0.5})
    }
    for (tipo of item.damage_relations.no_damage_from){
      listRelevantes.push({tipo:tipo["name"], dano:0})
    }
=======
  listaF = []

  let a = 'a'
  let b = 'b'
>>>>>>> parent of ac214a8 (Logica Fraquezas)

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
  

<<<<<<< HEAD
  let tipos = []

  const tipo1 = fetch(`${dados.types[0].type["url"]}`).then(transformaJson)

  tipos.push(tipo1)
=======
  a = fetch(dados.types[0].type.url)
    .then(transformaJson)
    .catch()

  console.log(dados.types.length)
>>>>>>> parent of ac214a8 (Logica Fraquezas)

  if (dados.types[1]){
    const tipo2 = fetch(`${dados.types[1].type["url"]}`).then(transformaJson)
    tipos.push(tipo2)
    // console.log(tipo2)
  }
  // na lista tipos tem as promisses dos tipos do pokemon
  // console.log(listaGeral)

<<<<<<< HEAD
  function printFraq(item){
    
    
=======
function criaLista(item){
  let lFraq = []
  // console.log("cria lista", item.damage_relations)


  for (ob of item.damage_relations.double_damage_from){
    lFraq.push(ob.name)
>>>>>>> parent of 0a5fdbb (logica fraquesas)
  }

  // console.log(lFraq)

<<<<<<< HEAD
    rel1.then(printFraq)
    // rel2.then(printFraq)
  
  }else{
    rel1 = tipos[0].then(multtipos)
=======
    b = fetch(dados.types[1].type.url)
    .then(transformaJson)
    .catch()
  }
  
  console.log(a)
  console.log(b)
>>>>>>> parent of ac214a8 (Logica Fraquezas)
=======
  return lFraq
>>>>>>> parent of 0a5fdbb (logica fraquesas)

}

function n (p){

  console.log("P", p)
  
}

function atuaListFim (p){

  console.log("P", p)
  b.then(n)
}

function geraFraquesas (dados){

  listaF = []
  listaRelacoes = []
  let a = 'a'
  let b = 'b'

  
  console.log("dados",dados)
  console.log("dados2",dados.types[0].type.url)

  a = fetch(dados.types[0].type.url)
    .then(transformaJson)
    .then(criaLista)
    .catch()

  listaF.push(a)

  console.log(dados.types.length)

  if (dados.types.length == 2){

    b = fetch(dados.types[1].type.url)
    .then(transformaJson)
    .then(criaLista)
    .catch()
    listaF.push(b)
    
  }


  listaRelacoes = a.then(atuaListFim)
 

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

  // const listaFraq = listaF

  // console.log(listaFraq)

  return listaGeral
}

function printLista(item){
  // console.log(item)
  for (valor of item){
      for(val2x of valor[0]){
        for(valListaGeral of listaTiposGeral){
          if(val2x == valListaGeral.tipo){
            valListaGeral.dano*=2
          }
        }
      }
  }
  console.log(listaTiposGeral)

}


function printErro (dados){
  // console.log('Erro')
}


btok.onclick = () => {

  const pokemon = document.querySelector('#pokemon').value

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(transformaJson)
    .then(mostraImagem)
    .then(mostraTipos)
    .then(geraFraquesas)
    .then(printLista)
    .catch(printErro)
}

