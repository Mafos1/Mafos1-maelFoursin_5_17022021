function funRequest() { // Execution fonction de requete

    const fetchPick = fetch("https://oc-p5-api.herokuapp.com/api/cameras"); // Fetch de l'api
    const inputJs = document.getElementById("productContainers"); // Lien ou placer les élément html du javascript

    fetchPick.then(function (response) { return response.json() }) // Execution de la réponse de l'api récupéré avec fetch , et traduction en JSON

        .then(function (data) {   //  Etablissement d'une fonction avec les données
            data.forEach((item) => { // Pour chaque item une fonction
                const { name, price, _id, description, imageUrl } = item; // Constante créé pour chaque item récupéré de l'api. Chaque item en contient 5 autres.
                inputJs.innerHTML += // Transformation et imbrication en HTML , et ajout des 5 spécifité des items a chaque fois jusqu'as épuisement
                    ` <div class="container col-md-12 col-lg-6 col-xl-6">
                   <div class=" product mt-5 card card-border">
                      <img class="card-img-top" src="${imageUrl}"  alt="appareil photo vintage">
                      <div class="card-body">
                         <h3 class="card-title">${name}</h3>
                         <h4>${price / 100}€</h4></p>                                                   
                         <p class="card-txt">${description}</p>
                         <div class="text-center mt-5"><a><button type="button" 
                         class="btn btn-outline-warning text-dark" 
                         onclick="window.location.href = 'produit.html?id=${_id}'">Ajouter au panier</div> 
                      </div> 
                   </div>
                </div> `;
            });         // produit non ajouté au panier encore
        });

}
funRequest(); 








