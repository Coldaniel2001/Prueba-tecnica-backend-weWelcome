const dialogCreateRestaurant = document.getElementById("modalRestaurantCreate");
const showCreateRestaurant = document.getElementById("registerNewRestaurant");
const closeCreateRestaurant = document.getElementById("modalRestaurantCreateClose");
const sucessCreateRestaurant = document.getElementById("modalRestaurantCreateSucess");

const modalRestaurantCreateSucess = document.getElementById("modalRestaurantCreateSucess");

const formName = document.getElementById("name");
const formAddress = document.getElementById("address");
const formPhone = document.getElementById("phone");

const spanPopUpIncorrect = document.getElementById("spanPopUpIncorrect");

showCreateRestaurant.addEventListener("click", () => {
    dialogCreateRestaurant.showModal();
})

closeCreateRestaurant.addEventListener("click", () => {
    dialogCreateRestaurant.close();
    spanPopUpIncorrect.setAttribute('style', "visibility: hidden")
})

modalRestaurantCreateSucess.addEventListener("click", getInformacionRestaurant);


function getInformacionRestaurant() {
    if (formName.value !== "" && formAddress.value !== "" && formPhone.value !== "") {
        const createRestaurant = new FormData();
        createRestaurant.append("name", formName.value);
        createRestaurant.append("address", formAddress.value);
        createRestaurant.append("phone", formPhone.value);
        dialogCreateRestaurant.close();
        spanPopUpIncorrect.setAttribute('style', "visibility: hidden")
        formName.value = "";
        formAddress.value = "";
        formPhone.value = "";
        fetch("./controllers/restaurant.php?controller=createRestaurant", {
            method: "POST",
            body: createRestaurant,
        })
            .then((res) => res.json())
            .then((data) => getAllRestaurant(data))

    } else {
        spanPopUpIncorrect.setAttribute('style', "visibility: visible")
    }
}


