console.log('Hola mundo')
// console.log(5 == '5')
// console.log(5 === '5')


// for (let index = 0; index < 10; index++) {
//   console.log(index)
// }

// while (condition) {
  
// }

// function myFunction(nombre) {
//   // console.log('hola ' + nombre)
//   console.log(`Hola ${nombre}`)
// }

// let myFunction2 = (nombre) => {
//   console.log(`Hola ${nombre}`)
// }

// myFunction('Fredo')
// myFunction2('Omar')

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1
}

let jugarAdivinanza = () => {
  const numeroSecreto = generarNumeroSecreto()
  let intentosRestantes = 5
  let adivinado = false
  console.log("Bienvenido al juego de Adivina el Número!")
  console.log("Tienes 5 intentos para adivinar un número entre 1 y 100.")

  while (intentosRestantes > 0 && !adivinado) {
    const intentoUsuario = parseInt(prompt(`Te quedan ${intentosRestantes} intentos. Ingresa un número:`), 10)

    if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100 ) {
      console.log("Por favor, ingresa un número válido entre 1 y 100.");
      continue; // Reinicia el ciclo si el número no es válido
    }

    if(intentoUsuario === numeroSecreto) {
      adivinado = true
      console.log("¡Felicidades! Adivinaste el número correcto.");
    } else if(intentoUsuario > numeroSecreto) {
      console.log("El número es menor.");
    } else {
      console.log("El número es mayor.");
    }

    // Reducir los intentos restantes
    intentosRestantes--;

  }

  if(!adivinado) {
    console.log(`Lo siento, te has quedado sin intentos. El número secreto era: ${numeroSecreto}.`);
  }

}

jugarAdivinanza()