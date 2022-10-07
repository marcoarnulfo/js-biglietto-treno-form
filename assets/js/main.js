

const nomeUtente = document.getElementById("name");

const kmDaPercorrere = document.getElementById("km");

const userAge = document.getElementById("age");

const buttonGenerator = document.getElementById("genera");

const euro = "€";

const basePrice = 0.21;

const discount = 0.2

//const ticketNoDiscount = kmDaPercorrere * basePrice

//const nomeUtente = document.getElementById("name").value
                    // PARTE 1

                                      // PARTE 2


console.log('nome utente', document.getElementById("name").value);


buttonGenerator.addEventListener("click" , function(){
    //
    console.log(nomeUtente.value);
    console.log(kmDaPercorrere.value);
    console.log(userAge.value);
    console.log(kmDaPercorrere.value * basePrice , "prezzo senza sconto");
    const price = kmDaPercorrere.value * basePrice
    console.log(price);
    console.log(price - (price * 0.2) , "sconto minorenne");
    console.log(price - (price * 0.4) , "sconto over60");
}) 


 /*buttonGenerator.addEventListener("click" , function(){
    //
    if (userAge > "65"){
        let ticketNoDiscount = (ticketNoDiscount.value - ticketNoDiscount.value / 100 * 40)
        console.log(ticketNoDiscount);
    }
}) */




// buttonGenerator.addEventListener("click", function () {
    //Codice da eseguire qui
  //  console.log(userName.value);
    //console.log(priceNoDiscount.value);
    //console.log(userAge.value);

 //})
