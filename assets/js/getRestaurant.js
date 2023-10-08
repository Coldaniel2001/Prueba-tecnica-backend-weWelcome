const dataRestaurant = document.getElementById("dataRestaurant");

fetch("./controllers/restaurant.php?controller=getRestaurant")
    .then((res) => res.json())
    .then((data) => getAllRestaurant(data))

function getAllRestaurant(data) {
    data.map((restaurantDetails) => {
        dataRestaurant.innerHTML += `
            <div class="description__container">
            <div>
                <span>${restaurantDetails[0]}</span>
            </div>
            <div>
                <span>${restaurantDetails[1]}</span>
            </div>
            <div>
                <span>${restaurantDetails[2]}</span>
            </div>
            <div>
                <span>${restaurantDetails[3]}</span>
            </div>
            <div>
                <span>${restaurantDetails[4]}</span>
            </div>
            <div>
                <span>${restaurantDetails[5]}</span>
            </div>

            <div>
                <button id="editRestaurant" onclick="editDetailsRestaurant('${restaurantDetails.nombre}', '${restaurantDetails.direccion}', '${restaurantDetails.telefono}')">Editar</button>
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
                        <button id="modalRestaurantEditClose" autofocus>Cerrar</button>
                        <button id="modalRestaurantEditSucess" type="submit">Aceptar</button>
                    </div>
            </dialog>

        </div>
            `
    })
}