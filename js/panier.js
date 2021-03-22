// 
const panier = JSON.parse(localStorage.getItem("panier")); // créa de la constante panier, récupération des infos JSON et traduction pr JS

//Condition pour afficher le panier ou non
if (panier) {
  productSelect(); // Si des produit on été ajouté, afficher el panier , sinon afficher trashProduct ( Votre panier est vide)
} else {
  trashProducts();
}
//Boucle pour importer les produits . Not working , 1 seul produit s'ajoute uniquement
function productSelect() {  // Condition "if'" 
  panier.forEach(function (result) { infos(result); });     // Pour chaque article, créé fonction qui affiche le retour (result) et injecte dans la function infos

}
// HTML adaptable pr l'ajout au panier
function infos(result) {
  document.getElementById("addToBasket").innerHTML =  // injection dans l'HTML
    `
    <tbody>
      <tr id="array">
        <td class="text-center"><img src="${result.image}" class="img_panier alt="appareil ${result.name}"> <br/> ${result.name} <br/> Objectif : ${result.lenses}</td>
        <td class="text-center">
          <button>-</button>
          <button>+</button>
        </td>
        <td id="prix_unite${result}" class="text-center">${result.price + " €"}</td>
        <td class="text-center"></td>
      </tr>
    </tbody>
  `
}


// Faire apparaitre un message lorsque le panier est vide
function trashProducts() {      // condition "else" 
  alert("Votre panier est vide ! Achetez vite")   // message d'alerte
  document.getElementById("basketIsEmpty").innerHTML = // injection dans l'HTML
    `
    <div>   
    </br></br>
      <h2>Votre panier est vide</h2>      
    </div>
  `
}

// Vider le panier et le local storage
function emptyBasket() {
  localStorage.clear();  // Vider le localStorage
  location.reload();   // Reset comme si l'utilisateur arrivait 
}



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

function buttonValidate() {                       // fonction validation au boutton
  btnSend.addEventListener('change', (e) => {           // ecoute de l'event
    e.preventDefault()                              // Eviter d'afficher plusieurs fois al boite de dialogue
    if (lastName == true && firstName == true && email == true && address == true && city == true) {  // si tous les élément sont correct alors boite de dialogue en fonction
      alert('merci')
    } else {
      alert('Veuillez completer toutes les cases')
    }
  })
}

formular()
buttonValidate()




