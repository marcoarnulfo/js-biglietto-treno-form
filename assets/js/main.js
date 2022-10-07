

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
        document.getElementById("nome_del_passeggero").innerHTML = nomeUtente.value
        document.getElementById("tipo_sconto").innerHTML = "Sconto Minorenne"
        document.getElementById("numero_carrozza").innerHTML = Math.floor((Math.random() * 10) + 1)
        document.getElementById("codice_cp").innerHTML = Math.floor((Math.random() * 100000) + 1)
        document.getElementById("costo_biglietto").innerHTML = scontoMinorenne.toFixed(2)

        // console.log(scontoMinorenne.toFixed(2) , "applicato sconto minorenne");
        // console.log(nomeUtente.value);
        // console.log(userAge.value);

    } else if (userAge.value > 65){
        document.getElementById("nome_del_passeggero").innerHTML = nomeUtente.value
        document.getElementById("tipo_sconto").innerHTML = "Sconto over 65"
        document.getElementById("numero_carrozza").innerHTML = Math.floor((Math.random() * 10) + 1)
        document.getElementById("codice_cp").innerHTML = Math.floor((Math.random() * 100000) + 1)
        document.getElementById("costo_biglietto").innerHTML = scontoOver.toFixed(2)

        // console.log(scontoOver.toFixed(2) , "applicato sconto over65");
    } 
}) 


