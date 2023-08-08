class Numeros{
vuelto(){
    let num = document.getElementById("num").value
    num = parseFloat(num)
    let iva = 0.12
    let totalConIVA
    
    if (num > 100) {
      totalConIVA = num + (num * iva)
    } else {
      totalConIVA = num
    }
    
    let pago = ""
    let vuelto = pago + totalConIVA
    
    console.log("Total con IVA:", totalConIVA)
    console.log("Vuelto:", vuelto)
    
    resp.textContent = `El total con IVA es: ${totalConIVA}\nEl vuelto es: ${vuelto}`
    

}
multiplos(){
    let num = document.getElementById("num").value
        num = parseInt(num)
        let multi = document.getElementById("multi").value
        multi = parseInt(multi)
        let resp = document.getElementById("resp")
        //console.log(resp.textContent)
        console.log(num,multi)
        if (num % multi == 0){
            resp.textContent=`${multi} Es multiplo de ${num}`
            //console.log(multi, " Es multiplo de ",num)
        }else{
            resp.textContent=`${multi} No es multiplo de ${num}`
        }
    }
    divisores(){
    let divisores = []
    let i = 0
    let num = document.getElementById("num").value
    num = parseInt(num)
    console.log(num)
    while (i <= num){
    i++
    if (num % i ==0){
    divisores.push(i)
    resp.textContent="Los divisores son: " + divisores.join(",")
    }
}

}
sumadedivisores(){
let num= document.getElementById("num").value
num= parseInt(num)
console.log(num)
let i =0
let contador=0
while (i<=num){
    i++
if (num% i ==0){
    contador=contador+i
    resp.textContent= "La suma de los divisores es:  "  +contador
}    
}

}
cantidaddedivi(){
let num= document.getElementById ("num").value
num= parseInt(num)
console.log(num)
let i=0
let contador=0
while (i<num){
i++
if (num%i==0){
    contador=contador+1
    console.log(contador)
    resp.textContent= `La cantidad de divisores de ${num} son ${contador}`
    
}
}

}
perfectos(){
let num= document.getElementById("num").value 
let perfecto= num
num=parseInt(num)
console.log(num)
let i=0
let contador=0
while (i<num){
    i++
    if (num%i==0){
        contador=contador+ (i%perfecto)


    } else { if (contador==num){
        console.log("Es perfecto")
        resp.textContent= `El numero ${num} es perfecto`
    }
else{ 
console.log(" No es perfecto")
resp.textContent= `Èl numero ${num}  no es perfecto`
}
    }
}

}
amigos(){
    let num = document.getElementById("num").value
    let num2 = document.getElementById("num2").value
    
    num = parseInt(num)
    num2 = parseInt(num2)
    
    console.log(num, num2)
    
    let sumaDivisoresNum = 0
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sumaDivisoresNum += i
      }
    }
    
    let sumaDivisoresNum2 = 0;
    for (let i = 1; i < num2; i++) {
      if (num2 % i === 0) {
        sumaDivisoresNum2 += i
      }
    }
    
    if (sumaDivisoresNum === num2 && sumaDivisoresNum2 === num) {
      console.log("Son amigos")
      resp.textContent = "Son amigos"
    } else {
      console.log("No son amigos")
      resp.textContent = "No son amigos"
    }
    
}
primos(){
    let num= document.getElementById("num").value 
    num=parseInt(num)
    let i=1
    let contador=0 
    while(i<=num){
        if (num%i==0){
            contador=contador+1 
        }
        i++
    }
     if (contador==2){
        console.log("Es primo")
        resp.textContent=`El numero ${num}  es primo`
     } else {
        console.log("No es primo")
        resp.textContent=`El numero ${num}  no es un numero primo `
     }
}
primosgemelos(){
    let num= document.getElementById("num").value
    num=parseInt(num)
    console.log(num)
    let num2= document.getElementById("num2").value
    num2= parseInt(num2)
    console.log(num2)
    let i= 1
    let contador =0 
    let i2= 1
    let contador2=0
    while(i<=num){
        if (num%i==0){
            contador=contador+1
        }
        i++
    }
    if (contador==2){
        console.log ("Es primo")

    }else{
        console.log("No es primo") 
    }
    while (i2<=num2){
if (num2%i2==0){
    contador2=contador2+1
}
i2++
    }
    if (contador2==2){
       console.log("Es primo")
    }else {
        console.log("No es primo")
    }
    if (contador==2 && contador2==2){
        console.log("Son primos gemelos ")
        resp.textContent= `El numero ${num} y ${num2} son primos gemelos `
    }else {
        console.log("No son primos gemelos ")
        resp.textContent= `El numero ${num} y ${num2} no son primos gemelos`
    }
}
invertida(){
    let num = document.getElementById("num").value
    num = parseInt(num)
    console.log(num)
    
    let numeroInvertido = 0
    let temp = num
    
    while (temp !== 0) {
      let digito = temp % 10;
      numeroInvertido = numeroInvertido * 10 + digito
      temp = Math.floor(temp / 10)
    }
    
    console.log(numeroInvertido)
    
    let i = 1
    let contador = 1
    while (i <= num) {
      i++;
      if (num % i === 0) {
        contador = contador + 1
      }
      resp.textContent= `El numero invertido es de: ${numeroInvertido} `
    }
    
}
cantidaddedigitos(){
    let num = document.getElementById("num").value
    num = parseInt(num)
    console.log(num)

    let numString = num.toString()
    let digitos = numString.length

    console.log(digitos)

    resp.textContent= `La cantidad de digitos es de: ${digitos}  `
}
factorial(){
    let num = document.getElementById("num").value
    num = parseInt(num)
    console.log(num)
    
    let factorial = 1
    let i = 1
    
    while (i <= num) {
      factorial *= i
      i++
    }
    
    console.log(factorial)
    resp.textContent= `El cactorial de ${num} es:  ${factorial}`
}
exponente(){
       let base = document.getElementById("num").value
       base = parseInt(base)
       console.log(base)

       let exponente = document.getElementById("exp").value
       exponente = parseInt(exponente)
       console.log(exponente)

       let resultado = Math.pow(base, exponente)
       console.log(resultado)

       resp.textContent=`El resultado de ${base} elvado a la ${exponente} es de: ${resultado}`

}
tablademulti(){
    let num = document.getElementById("num").value
    num = parseInt(num)
    console.log(num)
    
    let tabla = ''
    for (let i = 1; i <= 12; i++) {
      let resultado = num * i
      tabla += `<p>${num} x ${i} = ${resultado}</p>`
    }
    
    console.log(tabla)
    resp.innerHTML = tabla
    
}
figonasis(){
    let num = document.getElementById("num").value
    num = parseInt(num)
    console.log(num)
    
    let a = 0
    let b = 1
    let resultado = ''
    
    while (b <= num) {
      resultado += b + ' '
      let temp = b
      b = a + b
      a = temp
    }
    
    console.log(resultado)
    resp.textContent = resultado
    

}    

}

const numero = new Numeros()