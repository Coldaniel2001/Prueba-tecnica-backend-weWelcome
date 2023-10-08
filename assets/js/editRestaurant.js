function editDetailsRestaurant(nombre, direccion, telefono, id) {
    const dialogCreateRestaurant = document.getElementById("modalRestaurantEdit");

    const newName = document.getElementById("newName");
    const newAddress = document.getElementById("newAddress");
    const newPhone = document.getElementById("newPhone");
    const idRestaurant = document.getElementById("idRestaurant");

    newName.value = nombre;
    newAddress.value = direccion;
    newPhone.value = telefono;
    idRestaurant.innerText = id;

    dialogCreateRestaurant.showModal();

}

function editDetailClose() {
    const dialogCreateRestaurant = document.getElementById("modalRestaurantEdit");
    const spanPopUpIncorrectEdit = document.getElementById("spanPopUpIncorrectEdit");

    spanPopUpIncorrectEdit.setAttribute('style', "visibility: hidden")
    dialogCreateRestaurant.close();
}

function editDetailSucess() {

    const newName = document.getElementById("newName");
    const newAddress = document.getElementById("newAddress");
    const newPhone = document.getElementById("newPhone");
    const idRestaurant = document.getElementById("idRestaurant");


    const dialogCreateRestaurant = document.getElementById("modalRestaurantEdit");
    const spanPopUpIncorrectEdit = document.getElementById("spanPopUpIncorrectEdit");

    if (newName.value !== "" && newAddress.value !== "" && newPhone.value !== "") {
        const editRestaurant = new FormData();
        editRestaurant.append("id", idRestaurant.innerText);
        editRestaurant.append("newName", newName.value);
        editRestaurant.append("newAddress", newAddress.value);
        editRestaurant.append("newPhone", newPhone.value);
        dialogCreateRestaurant.close();


        fetch("./controllers/restaurant.php?controller=editRestaurant", {
            method: "POST",
            body: editRestaurant,
        })
            .then((res) => res.json())
            .then((data) => getAllRestaurant(data))

    } else {
        spanPopUpIncorrectEdit.setAttribute('style', "visibility: visible")
    }
}
