class Arreglos{
    mayor(){
        let datos= document.getElementById("datos").value
        let numeros = datos.split(";") 
        let may=parseInt(numeros[0]) 
        for(let i=1;i < numeros.length;i++){
           if (may < parseInt(numeros[i])){
             may = parseInt(numeros[i])
           } 
        }
        let resp = document.getElementById("resp")
        resp.textContent=`El mayor del arreglo entre[${numeros}] es= ${may}`

    }

    menor(){
        
        let datos = document.getElementById("datos").value
        let numeros = datos.split(";")
        let men = parseInt(numeros[0])

        for (let i = 1; i < numeros.length; i++) {
            if (men > parseInt(numeros[i])) {
                men = parseInt(numeros[i])
            }
        }

        let resp = document.getElementById("resp")
        resp.textContent = `El menor del arreglo entre [${numeros}] es = ${men}`
        }
    
    promedio(){
        let datos = document.getElementById("datos").value
        let numeros = datos.split(";")
        let suma = 0
        for (let i = 0; i < numeros.length; i++) {
            suma += parseInt(numeros[i])
        }
        let promedio = suma / numeros.length
        let resp = document.getElementById("resp")
        resp.textContent = `El promedio del arreglo entre [${numeros}] es = ${promedio}`
    }
    
    nombresalrevez(){
        let nombre = document.getElementById("datos").value
        let caracteres = nombre.split("")
        let nombreAlReves = caracteres.reverse().join("")
        let resp = document.getElementById("resp")
        resp.textContent = `El nombre al revés de "[${nombre}]" es "${nombreAlReves}"`
    }
    buscar(){
        let datos = document.getElementById("datos").value
        let valores = datos.split(";")
    
        let buscado = parseInt(valores[valores.length - 1]) // Número a buscar
        let posicionAleatoria = Math.floor(Math.random() * valores.length); // Posición aleatoria
    
        let resp = document.getElementById("resp")
    
        if (parseInt(valores[posicionAleatoria]) === buscado) {
            resp.textContent = `El número ${buscado} se encuentra en la posición ${posicionAleatoria}.`
        } else {
            resp.textContent = `El número ${buscado} no se encontró en la posición ${posicionAleatoria}.`
        }
      
    }
    adivinum(){
        let numeros = document.getElementById("datos").value.split(";")
        let numeroAleatorio = Math.floor(Math.random() * numeros.length) + 1
        let numeroAdivinar = parseInt(numeros[numeroAleatorio - 1])

        if (!isNaN(numeroAdivinar)) {
            let resp = document.getElementById("resp")
            if (numeros.includes(numeroAdivinar.toString())) {
                resp.textContent = `¡Adiviné! El número ${numeroAdivinar} está escrito [${numeros}].`
            } else {
                resp.textContent = `No adiviné. El número ${numeroAdivinar} no está escrito [${numeros}].`
            }
        } else {
            let resp = document.getElementById("resp")
            resp.textContent = "No se puede adivinar. Asegúrate de ingresar números en el campo de entrada."
        }
    }
   
    eliminar(){
        let datos = document.getElementById("datos").value
        let numeros = datos.split(";")
        if (numeros.length > 0) {
        let index = Math.floor(Math.random() * numeros.length)
        let numeroAEliminar = parseInt(numeros[index])
            numeros.splice(index, 1)
        let resp = document.getElementById("resp")
            resp.textContent = `Se eliminó el número [${numeroAEliminar}]. Ahora el numero es: ${numeros}.`
        }
    }
   insertar(){
    let datos = document.getElementById("datos").value
    let numeros = datos.split(";").map(Number)
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1
        numeros.push(numeroAleatorio);
    let resp = document.getElementById("resp")
        resp.textContent = `Se agregó el número aleatorio ${numeroAleatorio}. Ahora el arreglo es [${numeros}].`
   }
   base10abase2(){
    let numBase10 = parseInt(document.getElementById("datos").value)
    let numBase2 = numBase10.toString(2)

    let respBase2 = document.getElementById("resp")
    respBase2.textContent = `El número ${numBase10} en base 2 es: ${numBase2}`
}
base2abase10(){
    let numBase2 = document.getElementById("datos").value
    let numBase10 = parseInt(numBase2, 2)

    let respBase10 = document.getElementById("resp")
    respBase10.textContent = `El número ${numBase2} en base 10 es: ${numBase10}`
}
sueldoemple(){
    let empleados = [
        { nombre: "ana", vh: 5, nh: 40 },
        { nombre: "Mary", vh: 10, nh: 40 },
        { nombre: "Jose", vh: 2, nh: 40 }
    ]
    let sumaSueldos = 0
    for (let i = 0; i < empleados.length; i++) {
    let sueldo = empleados[i].vh * empleados[i].nh
        sumaSueldos += sueldo
            }
    let promedioSueldos = sumaSueldos / empleados.length
    let resp = document.getElementById("resp")
        resp.textContent = `El promedio de sueldos de los empleados es: [${promedioSueldos}]`
}
sudiv(){
    let datos = document.getElementById("datos").value
    let numeros = datos.split(";").map(Number)
    let sumaDivisores = 0

    for (let i = 0; i < numeros.length; i++) {
        sumaDivisores +=(numeros[i])
    }

    let resp = document.getElementById("resp")
    resp.textContent = `La suma de los divisores de los números [${datos}] es = ${sumaDivisores}`
  
}
perfectos(){
    let datos = document.getElementById("datos").value
    let numeros = datos.split(";").map(Number) //separar y tranformar los numeros 
    let numerosPerfectos = []
    let numerosNoPerfectos = []

    for (let i = 0; i < numeros.length; i++) {
        let sumaDivisores =(numeros[i])
        if (sumaDivisores === numeros[i]) {
            numerosPerfectos.push(numeros[i])
        } else {
            numerosNoPerfectos.push(numeros[i])
        }
    }

    let resp = document.getElementById("resp")
    resp.textContent = `Números Perfectos: [${numerosPerfectos(", ")}]` 
        
}

numsprims(){
    let datos = document.getElementById("datos").value
    let numeros = datos.split(";")
    let contadorPrimos = 0

    for (let i = 0; i < numeros.length; i++) {
        let num = parseInt(numeros[i])
        if (esPrimo(num)) {
            contadorPrimos++
        }
    }

    let resp = document.getElementById("resp")
    resp.textContent = `En el arreglo [${numeros}], hay ${contadorPrimos} número(s) primo(s).`

}
repetdeunnum(){
    let datos = document.getElementById("datos").value
    let numeros = datos.split(";")
    let numContador = {}

    for (let i = 0; i < numeros.length; i++) {
        let num = parseInt(numeros[i])
        if (numContador[num]) {
            numContador[num]++
        } else {
            numContador[num] = 1
        }
    }
    let resp = document.getElementById("resp")
    let resultText = "En el arreglo ["
    
    for (let num in numContador) {
        if (numContador.hasOwnProperty(num)) { //si un objeto tiene una propiedad específica
            resultText += `${num} se repite ${numContador[num]} vez/veces, `
        }
    }
        resultText = resultText.slice(0, -2) + "]." //Esto elimina la última coma y espacio
        resp.textContent = resultText
}
vueltodebillet(){
    let datos = document.getElementById("datos").value
    let valores = datos.split(";")

    let total = parseInt(valores[0])
    let pagar = parseInt(valores[1])
    let vuelto = total - pagar

    let resp = document.getElementById("resp")
    let resultText = "El vuelto se puede dar con:"

    const billetesMonedas = [100, 50, 20, 10, 5, 1] // billetes y monedas 

    for (let valor of billetesMonedas) {
        if (vuelto >= valor) {
            let cantidad = Math.floor(vuelto / valor)
            vuelto -= cantidad * valor

            resultText += ` ${cantidad} billete(s) de $${valor},`
        }
    }

    resultText = resultText.slice(0, -1) + "." // esto elimina la última coma
    resp.textContent = resultText
    

}
}
const arreglo=new Arreglos()