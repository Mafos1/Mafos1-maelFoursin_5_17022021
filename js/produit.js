//!URL + API

let myURL = "https://oc-p5-api.herokuapp.com/api/cameras"; // URL a appeler
let newUrl = new URL(window.location.href); //  new permet de changer l'URL avec les propriété qui suivent / ( retourne l'URL de la page présente )

// FONCTION D'APPEL DE L'URL ET DE L'API
function addContent() {
  let id = (newUrl).searchParams.get('id') // id = la newUrl , searchparams permet d'avoir les infos de GET contenu ds l API. get permet de les récupérer et de les incorporer a la variable "id"
  fetch(`${myURL}/${id}`)         // Ici se créé le lien unique de la page qui inclut ce produit. On fetch avec l'url myURL avec l'id. On y rajoute au bout l'id différent pour chaque page. On sépare pas un slash.
    .then(res => res.json())    // Execution de la réponse de l'api récupéré avec fetch , et traduction en JSON
    .then(function (data) {     // Etablissement d'une fonction avec les données 

      article = data          // article viendra de la data récupéré
      addHTML()                     // emplacement de addHTML et addLenses dans la fonction addContent
      addLenses()
      addButtonHTML()
    })
}

//!FONCTION HTML AVEC LES DONNEES VARIABLES EN FONCTION DE L'API

function addHTML() {
  document.getElementById('oneCamera').innerHTML +=                               // fonction addHTML reliée ds le produit.html par la div oneCamera 
    `
    <h1 class="card-title text-center">${article.name}</h1></br>                   
      <div class="product">
        <img class=”product_img” src="${article.imageUrl}"  alt="${article.name}">
        </br></br></br>
        <h6 class="description_produit ml-4 text-center">${article.description}</h6>
        <h3 class="prix_produit mt-4 ml-4 text-center">${article.price / 100}€</h3>
      </div>
    `
}

//! FONCTION BUTTONHTML POUR L'AJOUT AU PANIER

function addButtonHTML(){                                                        // fonction addButtonHTML pour lié le boutton au panier pour l'ajout
  document.getElementById('boutonPanier').innerHTML +=
  `
  <a href="./panier.html" class="text-dark">Ajouter au panier</a>
  `
}

//!AJOUT LENTILLES POUR CHAQUES ITEMS RENSEIGNE DANS L'API

function addLenses() {
  for (let i = 0; i < article.lenses.length; i++) { /* Loop des lenses. Sachant que 'i' vaut 0, et que si 'i' est  inferieur au nombre total de lentille proposé pour chaque articles 
      (dont les nombres sont décidé par data, data qui lis les infos de l'API), alors dans ce cas on incrémente de 1 jusqu'à ce que chaque donnée soit itéré une fois*/
    console.log('lenses' + i);
    document.getElementById("lensesSelect").innerHTML +=
      `
      <select> 
        <option value="${article.lenses[i]}">${article.lenses[i]}</option>
      </select>
      ` /* Implémentation du HTML via JS dans la div 'lensesSelect prévu à cet effet. Select crée le menu déroulant et les option proposé ont les valeurs indiqué parl'API. 
      Le [i] fait rapport a la boucle. le 1er ${article.lenses[i]} ne l'affiche pas au client mais communique avec l'API et le 2eme l'affiche au client.*/
  }}

  addContent();
