

const nomeUtente = document.getElementById("name");

const kmDaPercorrere = document.getElementById("km");

const userAge = document.getElementById("age");

const buttonGenerator = document.getElementById("genera");

const euro = "€";

const basePrice = 0.21;

const discount = 0.2

const discountOver = 0.4


buttonGenerator.addEventListener("click" , function(){
    //
    console.log(nomeUtente.value);
    console.log(kmDaPercorrere.value);
    console.log(userAge.value , "userAge.value");
    console.log(userAge , "userAge");
    console.log(kmDaPercorrere.value * basePrice , "prezzo senza sconto");
    const price = kmDaPercorrere.value * basePrice
    console.log(price);

    const scontoMinorenne = (price - price * discount)
    const scontoOver = (price - price * discountOver)

    if (userAge.value < 18){
        console.log(scontoMinorenne.toFixed(2) , "applicato sconto minorenne");

    } else if (userAge.value > 65){
        console.log(scontoOver.toFixed(2) , "applicato sconto over65");
    } 
}) 


