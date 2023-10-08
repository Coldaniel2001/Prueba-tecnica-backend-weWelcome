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
        formName.value = "";
        formAddress.value = "";
        formPhone.value = "";
        fetch("./controllers/restaurant.php?controller=createRestaurant", {
            method: "POST",
            body: createRestaurant,
        })
            .then((res) => res.json())
            .then((data) => getNewRestaurant(data))

    } else {
        spanPopUpIncorrect.setAttribute('style', "visibility: visible")
    }
}

function getNewRestaurant(data) {
    dataRestaurant.innerHTML = "";
    data.map((restaurantDetails) => {
        dataRestaurant.innerHTML += `
        <div class="description__container">
        <div>
            <span>${restaurantDetails.id}</span>
        </div>
        <div>
            <span>${restaurantDetails.nombre}</span>
        </div>
        <div>
            <span>${restaurantDetails.direccion}</span>
        </div>
        <div>
            <span>${restaurantDetails.telefono}</span>
        </div>
        <div>
            <span>${restaurantDetails.created_at}</span>
        </div>
        <div>
            <span>${restaurantDetails.updated_at}</span>
        </div>

        <div>
            <button  id="editRestaurant" onclick="editDetailsRestaurant()">Editar</button>
            <button id="deleteRestaurant">Borrar</button>
        </div>

        <dialog id="modalRestaurantEdit">
            <form id="formEditRestaurant">
                <label>Nombre: <input type="text" id="newName"> </label>
                <label>Dirección: <input type="text" id="newAddress"> </label>
                <label>Telefono: <input type="number" id="newPhone"> </label>
                <span id="spanPopUpIncorrect">Tienes que rellenar el formulario para editar restaurante</span>
            </form>
            <div>
                <button id="modalRestaurantEditClose"  autofocus>Cerrar</button>
                <button id="modalRestaurantEditSucess"  type="submit">Aceptar</button>
            </div>
        </dialog>

    </div>
        `
    })

    
}

