
function deleteDetailsRestaurant(id) {
    const dialogDeleteRestaurant = document.getElementById("modalRestaurantDelete");
    const idDelete = document.getElementById("idDelete");
    idDelete.innerText = id;
    dialogDeleteRestaurant.showModal();
}

function deleteDetailClose() {
    const dialogDeleteRestaurant = document.getElementById("modalRestaurantDelete");
    dialogDeleteRestaurant.close();
}

function deleteDetailSucess() {
    const dialogDeleteRestaurant = document.getElementById("modalRestaurantDelete");
    const idDelete = document.getElementById("idDelete");
    const deleteRestaurant = new FormData();
    deleteRestaurant.append("id", idDelete.innerText);
    dialogDeleteRestaurant.close();


    fetch("./controllers/restaurant.php?controller=deleteRestaurant", {
        method: "POST",
        body: deleteRestaurant,
    })
        .then((res) => res.json())
        .then((data) => getAllRestaurant(data))

}