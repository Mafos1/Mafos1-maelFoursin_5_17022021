
//! FORMULAIRE DE CONTACT 

let lastName = document.querySelector("#lastName")  // Recuperation eds id ds le HTML
let firstName = document.querySelector("#firstName")
let email = document.querySelector("#email")
let address = document.querySelector("#address")
let city = document.querySelector("#city")

function formular() {

lastName.addEventListener('change', (e) => {      // Ecoute du lastName
    e.preventDefault()                            // Evite la répatition de la boite de dialogue            
    const objValue = /^[a-zA-Z]+$/;               // Création de la constate avec Regex
    if (!objValue.test(e.target.value)) {         // Test de la constante objValue
      lastName.style.border = 'red solid 2px';    // Style en cas de réponse false
      alert('Veuillez renseigner votre nom')      // boite de dialogue afficher en cas de réponse true
      return true;
    } else {
      lastName.style.border = 'green solid 2px'; // style en cas de réponse false
      lastName = false;
    }
  })
  
firstName.addEventListener('change', (e) => {
    e.preventDefault()
    const objValue = /^[a-zA-Z]+$/;
    if (!objValue.test(e.target.value)) {
      firstName.style.border = 'red solid 2px';
      alert('Veuillez renseigner votre nom')
      return true;
    } else {
      firstName.style.border = 'green solid 2px';
      firstName = false;
    }
  })

email.addEventListener('change', (e) => {
    e.preventDefault()
    const objValue = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!objValue.test(e.target.value)) {
      email.style.border = 'red solid 2px';
      alert('Veuillez renseigner votre email')
      return true;
    } else {
      email.style.border = 'green solid 2px';
      email = false;
    }
  })

address.addEventListener('change', (e) => {
    e.preventDefault()
    const objValue = /^[^\\\/&]*$/;
    if (!objValue.test(e.target.value)) {
      address.style.border = 'red solid 2px';
      alert('Veuillez renseigner votre adresse')
      return true;
    } else {
      address.style.border = 'green solid 2px';
      address = false;
    }
  })

city.addEventListener('change', (e) => {
    e.preventDefault()
    const objValue = /^[a-zA-Z]+$/;
    if (!objValue.test(e.target.value)) {
      city.style.border = 'red solid 2px';
      alert('Veuillez renseigner votre ville')
      return true;
    } else {
      city.style.border = 'green solid 2px';
      city = false;
    }
  })
}
 
//! BOITE DE DIALOGUE A FINIR

function buttonValidate  () {                       // fonction validation au boutton
btnSend.addEventListener('change', (e) => {           // ecoute de l'event
    e.preventDefault()                              // Eviter d'afficher plusieurs fois al boite de dialogue
    if (lastName==true && firstName==true && email==true && address==true && city==true) {  // si tous les élément sont correct alors boite de dialogue en fonction
    alert('merci') 
    } else {
        alert('Veuillez completer toutes les cases')
    }
})
}

formular()
buttonValidate()