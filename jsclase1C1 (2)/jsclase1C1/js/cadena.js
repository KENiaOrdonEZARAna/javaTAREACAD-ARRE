class Cadenas{
vocalsconsonates(){
    let frase = document.getElementById("datos").value
    let cv=0,cc=0
    for(let i=0;i < frase.length;i++){
     if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
           cv=cv+1
        }
    if (frase[i]>= 'a' && frase[i]<= 'z' ) {
           cc=cc+1
        }
    }
        console.table({cv,cc})
    let resp = document.getElementById("resp")
        resp.textContent=`cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`
}
palabfrase(){
    let frase = document.getElementById("datos").value
    let cv = 0, cc = 0, palabraCount = 0
    for (let i = 0; i < frase.length; i++) {
    const char = frase[i].toLowerCase() //convertir a minusculas
     if (char >= 'a' && char <= 'z') {
                 cc++
    if (i === 0 || frase[i - 1] === ' ' || frase[i - 1] === '\n') {
         palabraCount++;
            }
     if ('aeiou'.includes(char)) { //para saber si esta en minusculas
                cv++;
            }
        }
    }
        console.table({ cv, cc, palabraCount })
    let resp = document.getElementById("resp")
        resp.textContent = `Cantidad de vocales: ${cv}, cantidad de consonantes: ${cc}, cantidad de palabras: ${palabraCount}`
}
caracterespecial(){
let frase = document.getElementById("datos").value
let cv = 0, cc = 0
let comas = 0, puntos = 0, puntoYComa = 0, dosPuntos = 0
for (let i = 0; i < frase.length; i++) {  //cantidad de caracteres
    if (frase[i] >= 'a' && frase[i] <= 'z') {
         cc++
    }
if (frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u') {
        cv++
    }
if (frase[i] == ',') {
        comas++
    } 
if (frase[i] == '.') {
        puntos++
    }
if (frase[i] == ';') {
        puntoYComa++
    }
if (frase[i] == ':') {
        dosPuntos++
    }
}
    console.table({ cv, cc, comas, puntos, puntoYComa, dosPuntos })
let resp = document.getElementById("resp")
    resp.textContent = `Cantidad de vocales: ${cv}, cantidad de consonantes: ${cc}, 
    cantidad de comas: ${comas}, cantidad de puntos: ${puntos}, 
    cantidad de punto y coma: ${puntoYComa}, cantidad de dos puntos: ${dosPuntos}`
}
frseigualaleer(){
let frase = document.getElementById("datos").value
let cv = 0, cc = 0, esPalindromo = true
for (let i = 0; i < frase.length; i++) {
const char = frase[i] //frase temporal que sirve como i
if (char >= 'a' && char <= 'z') {
        cc++;
if ('aeiou'.includes(char)) {
            cv++;
        }
    }
if (frase[i] !== frase[frase.length - 1 - i]) {
        esPalindromo = false  //cambia de v a f
    }
}
    console.table({ cv, cc, esPalindromo })
let resp = document.getElementById("resp")
if (esPalindromo) {
    resp.textContent = `Cantidad de vocales: ${cv}, cantidad de consonantes: ${cc}, la frase es un palíndromo`
} else {
    resp.textContent = `Cantidad de vocales: ${cv}, cantidad de consonantes: ${cc}, la frase no es un palíndromo`
}
}
copiarfrseinvert(){
let frase = document.getElementById("datos").value
let cv = 0, cc = 0
let invertida = ""
for (let i = 0; i < frase.length; i++) {
const char = frase[i].toLowerCase() //invierte todas las palabras en minusculas
    
if (char >= 'a' && char <= 'z') {  //compara su valor en ascci
            cc++
if ('aeiou'.includes(char)) { //esto compara su valor para verificar si son minusculas
                cv++
            }
        }
    invertida = char + invertida 
    }
    console.table({ cv, cc, invertida })
let resp = document.getElementById("resp")
    resp.textContent = `Cantidad de vocales: ${cv}, cantidad de consonantes: ${cc}, frase invertida: ${invertida}`
}
contantrfrses(){
let frase = document.getElementById("datos").value
let cv = 0, cc = 0
let fraseCombinada = frase + "; " + frase2
for (let i = 0; i < fraseCombinada.length; i++) {
const char = fraseCombinada[i].toLowerCase()
if (char >= 'a' && char <= 'z') {
        cc++
if ('aeiou'.includes(char)) {
            cv++
        }
    }
}
    console.table({ cv, cc })
let resp = document.getElementById("resp")
resp.textContent = `Cantidad de vocales: ${cv}, cantidad de consonantes: ${cc}, frase combinada: ${fraseCombinada}`
}
buscarcaractr(){
let frase = document.getElementById("datos").value
let cv = 0, cc = 0
for (let i = 0; i < frase.length; i++) {
if (frase[i] === 'a' || frase[i] === 'e' || frase[i] === 'i' || frase[i] === 'o' || frase[i] === 'u') {
            cv = cv + 1;
        }
if (frase[i] >= 'a' && frase[i] <= 'z') {
            cc = cc + 1
        }
    }
    console.table({ cv, cc });
let resp = document.getElementById("resp")
    resp.textContent = `cantidad de vocales: ${cv}, cantidad de consonantes: ${cc}`
if (frase.length > 0) {
let letraAleatoria = frase[Math.floor(Math.random() * frase.length)]
let posicion = frase.indexOf(letraAleatoria) + 1
    console.log(`La letra '${letraAleatoria}' está en la posición ${posicion} de la frase.`)
    }
}
buscarsubcade(){
let frase = document.getElementById("datos").value
let vocales = 'aeiou'
let cv = 0, cc = 0
for (let i = 0; i < frase.length; i++) {
    if (frase[i] >= 'a' && frase[i] <= 'z') {
        if (vocales.includes(frase[i])) {
            cv++;
        } else {
            cc++;
        }
    }
}
    console.table({ cv, cc });
let resp = document.getElementById("resp");
    resp.textContent = `cantidad de vocales: ${cv}, cantidad de consonantes: ${cc}`;
if (frase.length > 0) {
let subCadenaBuscar = " " 
let posicion = frase.indexOf(subCadenaBuscar) + 1
if (posicion > 0) {
    console.log(`La subcadena '${subCadenaBuscar}' está en la posición ${posicion} de la frase.`)
} else {
    console.log(`La subcadena '${subCadenaBuscar}' no se encuentra en la frase.`)
    }
}
}
insertsubcadena(){
let frase = document.getElementById("datos").value
let subCadenaBuscar = "que"
let posicionIndicada = 5
if (posicionIndicada >= 0 && posicionIndicada <= frase.length) {
let parteInicial = frase.slice(0, posicionIndicada)
let parteFinal = frase.slice(posicionIndicada)
let nuevaFrase = parteInicial + subCadenaBuscar + parteFinal
    console.log(nuevaFrase)
let vocales = 'aeiou'
let cv = 0, cc = 0
for (let i = 0; i < nuevaFrase.length; i++) {
if (nuevaFrase[i] >= 'a' && nuevaFrase[i] <= 'z') {
if (vocales.includes(nuevaFrase[i])) {
                    cv++;
                } else {
                    cc++;
                }
            }
        }
    console.table({ cv, cc });
let resp = document.getElementById("resp")
    resp.textContent = `cantidad de vocales: ${cv}, cantidad de consonantes: ${cc}`
    console.log(`La subcadena '${subCadenaBuscar}' se insertó en la posición ${posicionIndicada} de la frase.`)
    } else {
        console.log("La posición indicada está fuera de los límites de la frase.")
    }
}
eliminsubcade(){
let frase = "hola que tal"
let palabras = frase.split(" ")
let palabraEliminar = palabras[Math.floor(Math.random() * palabras.length)]
let posicion = frase.indexOf(palabraEliminar)
let nuevaFrase = ""
 if (posicion !== -1) {
let parteInicial = frase.slice(0, posicion)
let parteFinal = frase.slice(posicion + palabraEliminar.length)
    nuevaFrase = parteInicial + parteFinal
    console.log(nuevaFrase)
    } else {
    console.log("La palabra no se encontró en la frase.")
    }
let resp = document.getElementById("resp")
    resp.textContent = `La nueva frase es: ${nuevaFrase}`
}
convertirfrasearreglo(){
let frase = "10;20;12"
let caracterSeparador = ";"
let arreglo = frase.split(caracterSeparador).filter(item => item.trim() !== "")
let nuevaFrase = arreglo.join(",")
    console.log(nuevaFrase)
let resp = document.getElementById("resp")
    resp.textContent = `La nueva frase es: ${nuevaFrase}`
}
sumadedigitos(){
let frase = "123"
let suma = 0
for (let i = 0; i < frase.length; i++) {
if (!isNaN(parseInt(frase[i]))) {
            suma += parseInt(frase[i])
        }
    }
    console.log(`La suma de los dígitos en la frase es: ${suma}`)
let resp= document.getElementById("resp")
resp.textContent= `La nueva frase es: ${suma}`
}
}

const cadena=new Cadenas()