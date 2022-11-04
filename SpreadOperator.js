const fichaGuerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const equipoGuerreiro = {
 espada: "Andúril",
 capa: "capa élfica +2"
}

const guerreiro = {fichaGuerreiro, equipoGuerreiro}
console.log(guerreiro)
{
    fichaGuerreiro: { nome: 'Aragorn', fichaGuerreiro.classe, 'guerreiro' }
    equipoGuerreiro: { espada: 'Andúril', equipoGuerreiro.capa, 'capa élfica +2' }
  }

//   const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
// console.log(guerreiro)

// {
//     nome: 'Aragorn',
//     classe: 'guerreiro',
//     espada: 'Andúril',
//     capa: 'capa élfica +2'
//    }

//    const mago = {
//     nome: "Gandalf",
//     classe: "mago"
//    }
   
//     const guerreiro = {
//     nome: "Aragorn",
//     classe: "guerreiro"
//    }
   
//    const ranger = {
//     nome: "Legolas",
//     classe: "ranger"
//    }

//    const personagens = { ...mago, ...guerreiro, ...ranger }
// console.log(personagens)

// { nome: 'Legolas', classe: 'ranger' }