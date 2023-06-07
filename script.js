
const btok = document.querySelector('#btok')
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

const listaTiposGeral = [
  { tipo: 'normal', dano: 1 },
  { tipo: 'fire', dano: 1 },
  { tipo: 'water', dano: 1 },
  { tipo: 'grass', dano: 1 },
  { tipo: 'flying', dano: 1 },
  { tipo: 'fighting', dano: 1 },
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
  console.log("dados gerafraq", dados)

  let rel1
  let rel2 = false

  
  let listRelevantes = []

  function addList (item){

    console.log("add list")

    for (tipo of item.damage_relations.double_damage_from){
      listRelevantes.push({tipo:tipo["name"], dano:2})
    }
    for (tipo of item.damage_relations.half_damage_from){
      listRelevantes.push({tipo:tipo["name"], dano:0.5})
    }
    for (tipo of item.damage_relations.no_damage_from){
      listRelevantes.push({tipo:tipo["name"], dano:0})
    }
    console.log(listRelevantes)
    return listRelevantes
  }


  function multtipos (item){
    
    addList(item[0])
    // addList(item[1])
    // console.log(listRelevantes)
    return listRelevantes
  }

  function fraquezas (dados){

    function montaHTML (item){
      console.log(listRelevantes)

      for(tipoGeral of listaTiposGeral){
        for(tipoRel of listRelevantes){
          if (tipoGeral.tipo === tipoRel.tipo){
            tipoGeral.dano *= tipoRel.dano
          }
        }
      }
      console.log(listaTiposGeral)





      // htmlTipos += `<div class="tipo ${item.type.name}"> ${item.type.name} </div>`


    }

    dados[0].then(addList)

    if(dados[1]){
      dados[1]
        .then(addList) 
        .then(montaHTML)
    } else{
      dados[0].then(montaHTML)
    }

    

    console.log(listRelevantes)
  }

  fraquezas(dados)


  console.log(listRelevantes)

  // function geraListaFinalDeTipos(listRel, listGeral){
  // console.log(listRel)
  // console.log(listGeral)

  let listaFinal = []
  
  for (tipoGeral of listaTiposGeral){
    // console.log(listRelevantes)
    for (tipoRel of listRelevantes){

      console.log("tipos", tipoGeral.tipo, tipoRel.tipo)
      
      if(tipoGeral.tipo === tipoRel.tipo){
        console.log("reldano", tipoRel.dano)
        tipoGeral.dano *= tipoRel.dano
      }
    }
    // }
    // console.log(listGeral)
  }  

  // geraListaFinalDeTipos(listRelevantes, listaTiposGeral)

  console.log("lista geral atualizada",listaTiposGeral)
  

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

  let tiposPokemon = []

  const tipo1 = fetch(`${dados.types[0].type["url"]}`).then(transformaJson)
  tiposPokemon.push(tipo1)

  if (dados.types[1]){
    const tipo2 = fetch(`${dados.types[1].type["url"]}`).then(transformaJson)
    tiposPokemon.push(tipo2)
    // console.log(tipo2)
  }

  return tiposPokemon
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