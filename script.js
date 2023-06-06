

const btok = document.querySelector('#btok')
const btok2 = document.querySelector('#btok2')
const imagemPokemon = document.querySelector('#imagemPokemon')
const tipos = document.querySelector('#tipos')
const d4x = document.querySelector('#d4x')
const d2x = document.querySelector('#d2x')
const d1x = document.querySelector('#d1x')
const d1_2x = document.querySelector('#d1_2x')
const d1_4x = document.querySelector('#d1_4x')
const d0x = document.querySelector('#d0x')
// const pokemon = document.querySelector('#pokemon').value
// const pokemon = ''


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
  // console.log(listaGeral)

  function printFraq(item){
    
    
  }

  if (tipos[1]){
    
    rel1 = tipos[0].then(multtipos)
    rel2 = tipos[1].then(multtipos)

    rel1.then(printFraq)
    // rel2.then(printFraq)
  
  }else{
    rel1 = tipos[0].then(multtipos)

    rel1.then(printFraq)
  }


  console.log("lista Geral",listaGeral)
  console.log("lista Geral1",listaGeral[1])
  // let HTMLFraq = ''
  for (item of listaGeral){
    
    
    switch(item["dano"]){
      
      case 4:
        d4x.innerHTML += `<div class="tipo ${item["tipo"]}"> ${item["tipo"]} </div>`
        break;
      case 2:
        d2x.innerHTML += `<div class="tipo ${item["tipo"]}"> ${item["tipo"]} </div>`
        break;
      case 1:
        d1x.innerHTML += `<div class="tipo ${item["tipo"]}"> ${item["tipo"]} </div>`
        break;
      case 0.5:
        d1_2x.innerHTML += `<div class="tipo ${item["tipo"]}"> ${item["tipo"]} </div>`
        break;
      case 0.25:
        d1_4x.innerHTML += `<div class="tipo ${item["tipo"]}"> ${item["tipo"]} </div>`
        break;

    }
  }

  // tmlTipos += `<div class="tipo ${item.type.name}"> ${item.type.name} </div>`
  // console.log("rel",rel1)
  // console.log("rel",rel2)
}

function transformaJson(response){
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

  var listaFraq = listaF
  
  return listaFraq
}

function printLista(item){
  console.log(item)
}


function printErro (dados){
  console.log("erro",dados)
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

btok2.onclick = () => {
  console.log(listaFraq)

}


