
function editDetailsRestaurant(nombre, direccion, telefono){
    console.log(nombre);
    console.log(direccion);
    console.log(telefono);
    const dialogCreateRestaurant = document.getElementById("modalRestaurantEdit");
    dialogCreateRestaurant.showModal(); 
}

// closeCreateRestaurant.addEventListener("click", () => {
//     dialogCreateRestaurant.close();
//     spanPopUpIncorrect.setAttribute('style', "visibility: hidden")
// })