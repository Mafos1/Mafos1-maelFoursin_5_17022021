

function list() {
    fetch('https://oc-p5-api.herokuapp.com/api/cameras')
        .then(res => res.json())
        .then(
            response => {
                for (let prop of response) {
                    document.getElementById('list').innerHTML +=
                        '<tr>'
                        + '<td>' + prop.name + '</td>'
                        + '<td >' + '<img class="imgPanier" src="' + prop.imageUrl + '">' + '</td>'
                        + '<td>' + prop.price / 100 + '€' + '</td>'
                        + '<td>' + prop.lenses + '</td>'

                        + '<td>' +
                        '<select id="lenses' + prop.lenses + '" name="cams" onchange="onChangeLenses()">' +
                        '</select>'
                        + '</td>'
                        + '</tr>';
                }
            })
}
list();





//! FORMULAIRE
const formJs = document.getElementById("form");    // récup des infos dans "form"
formJs.addEventListener("submit", (event) => {
    event.preventDefault();




    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let fullForm = { firstName, lastName, address, city, email };


    function checkForm() {


        if (lastName != "") {
            alert("Renseignez votre nom svp !");
            document.getElementById("lastName").style.backgroundColor = "red";
        } else {
            document.getElementById("lasttName").style.backgroundColor = "green"
            alert("ok")
        }
        checkForm()
    }
})




