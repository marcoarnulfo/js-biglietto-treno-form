console.log("hello");




const nomeUtente = document.getElementById("name").value

const kmDaPercorrere = document.getElementById("km");

const userAge = document.getElementById("age");

const buttonGenerator = document.getElementById("genera");


const euro = "€";
const basePrice = 0.21;
console.log(basePrice + euro);

let ticketNoDiscount = kmDaPercorrere * basePrice




buttonGenerator.addEventListener("click" , function(){
    //
    const nomeUtente = document.getElementById("name").value
    console.log(nomeUtente);
    let ticketNoDiscount = kmDaPercorrere.value * basePrice
    console.log(ticketNoDiscount);
    const userAge = document.getElementById("age").value;
    console.log(userAge);
})


buttonGenerator.addEventListener("click" , function(){
    //
    if (userAge > "65"){
        let ticketNoDiscount = (ticketNoDiscount - ticketNoDiscount / 100 * 40)
        console.log(ticketNoDiscount);
    }
})




// buttonGenerator.addEventListener("click", function () {
    //Codice da eseguire qui
  //  console.log(userName.value);
    //console.log(priceNoDiscount.value);
    //console.log(userAge.value);

 //})
