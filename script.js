
const btok = document.querySelector('#btok')
const imagemPokemon = document.querySelector('#imagemPokemon')
const tipos = document.querySelector('#tipos')
const d4x = document.querySelector('#d4x')
const d2x = document.querySelector('#d2x')
const d1x = document.querySelector('#d1x')
const d1_2x = document.querySelector('#d1_2x')
const d1_4x = document.querySelector('#d1_4x')
const d0x = document.querySelector('#d0x')
const nome = document.querySelector('#nome')
const hp = document.querySelector('#hp')
const atk = document.querySelector('#atk')
const def = document.querySelector('#def')
const spatk = document.querySelector('#spatk')
const spdef = document.querySelector('#spdef')
const spd = document.querySelector('#spd')

// const pokemon = document.querySelector('#pokemon').value
// const pokemon = ''



let listaF = []

function geraFraquesas (dados){
  // console.log("dados gerafraq", dados)

  let rel1
  let rel2 = false

  
  let listRelevantes = []
  listRelevantes = []

  function addList (item){

    for (tipo of item.damage_relations.double_damage_from){
      listRelevantes.push({tipo:tipo["name"], dano:2})
    }
    for (tipo of item.damage_relations.half_damage_from){
      listRelevantes.push({tipo:tipo["name"], dano:0.5})
    }
    for (tipo of item.damage_relations.no_damage_from){
      listRelevantes.push({tipo:tipo["name"], dano:0})
    }

    // console.log(listRelevantes)
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
      
      for(tipoGeral of listaTiposGeral){
        for(tipoRel of listRelevantes){
          if (tipoGeral.tipo === tipoRel.tipo){
            tipoGeral.dano *= tipoRel.dano
          }
        }
      }

      let HTMLd4x = ""
      let HTMLd2x = ""
      let HTMLd1x = ""
      let HTMLd1_2x = ""
      let HTMLd1_4x = ""
      let HTMLd0x = ""

      HTMLd4x = ""
      HTMLd2x = ""
      HTMLd1x = ""
      HTMLd1_2x = ""
      HTMLd1_4x = ""
      HTMLd0x = ""

      d4x.innerHTML = ""
      d2x.innerHTML = ""
      d1x.innerHTML = ""
      d1_2x.innerHTML = ""
      d1_4x.innerHTML = ""
      d0x.innerHTML = ""

      listaTiposGeral.forEach(distribuidor)
      // console.log(listaTiposGeral)
      // console.log(d4x.innerHTML)

      d4x.innerHTML = HTMLd4x
      d2x.innerHTML = HTMLd2x
      d1x.innerHTML = HTMLd1x
      d1_2x.innerHTML = HTMLd1_2x
      d1_4x.innerHTML = HTMLd1_4x
      d0x.innerHTML = HTMLd0x

      // console.log(d4x.innerHTML)

      function distribuidor(value){
        switch (value.dano){
          case 4:
            HTMLd4x += `<div class="tipo ${value.tipo}"> ${value.tipo} </div>`;
          break;
          case 2:
            HTMLd2x += `<div class="tipo ${value.tipo}"> ${value.tipo} </div>`;
          break;
          case 1:
            HTMLd1x += `<div class="tipo ${value.tipo}"> ${value.tipo} </div>`;
          break;
          case 0.5:
            HTMLd1_2x += `<div class="tipo ${value.tipo}"> ${value.tipo} </div>`;
          break;
          case 0.25:
            HTMLd1_4x += `<div class="tipo ${value.tipo}"> ${value.tipo} </div>`;
          break;
          case 0:
            HTMLd0x += `<div class="tipo ${value.tipo}"> ${value.tipo} </div>`;
          break;
        }
      }
    }

    dados[0].then(addList)

    if(dados[1]){
      dados[1]
        .then(addList) 
        .then(montaHTML)
    } else{
      dados[0].then(montaHTML)
    }

    

    // console.log(listRelevantes)
  }

  fraquezas(dados)


  let listaFinal = []
  
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

}


function transformaJson (response){
    return response.json()
}

function mostraImagem(dados){
  // console.log(dados)
  imagemPokemon.src = dados.sprites.other.dream_world.front_default
  return dados
}

function atualizaInfo(dados){
  

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

  console.log(dados)

  nome.innerHTML = `ID. ${dados.id}  ${dados.name}`

  hp.innerHTML = dados.stats[0].base_stat
  atk.innerHTML = dados.stats[1].base_stat
  def.innerHTML = dados.stats[2].base_stat
  spatk.innerHTML = dados.stats[3].base_stat
  spdef.innerHTML = dados.stats[4].base_stat
  spd.innerHTML = dados.stats[5].base_stat


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
    .then(atualizaInfo)
    .then(geraFraquesas)
    .catch(printErro)
}