const dataRestaurant = document.getElementById("dataRestaurant");

fetch("./controllers/restaurant.php?controller=getRestaurant")
    .then((res) => res.json())
    .then((data) => getAllRestaurant(data))

function getAllRestaurant(data) {
    dataRestaurant.innerHTML = "";
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
                <button id="editRestaurant" onclick="editDetailsRestaurant('${restaurantDetails.nombre}', '${restaurantDetails.direccion}', '${restaurantDetails.telefono}' ,'${restaurantDetails.id}')">Editar</button>
                <button id="deleteRestaurant" onclick="deleteDetailsRestaurant('${restaurantDetails.id}')">Borrar</button>
            </div>

            <dialog id="modalRestaurantEdit">
                    <form id="formEditRestaurant">
                        <p id="idRestaurant"></p>
                        <label>Nombre: <input type="text" id="newName"> </label>
                        <label>Dirección: <input type="text" id="newAddress"> </label>
                        <label>Telefono: <input type="number" id="newPhone"> </label>
                        <span id="spanPopUpIncorrectEdit">Tienes que rellenar el formulario para editar restaurante</span>
                    </form>
                    <div class="chance-Options__container">
                        <button id="modalRestaurantEditClose" onclick="editDetailClose()" autofocus>Cerrar</button>
                        <button id="modalRestaurantEditSucess" onclick="editDetailSucess()" type="submit">Aceptar</button>
                    </div>
            </dialog>

            <dialog id="modalRestaurantDelete">
                <h3>¿Estás seguro de que quieres borrar el restaurante con ID: <span id="idDelete"></span>?</h3>
                <div class="chance-Options__container">
                    <button id="modalRestaurantDeleteClose" onclick="deleteDetailClose()" autofocus>Cerrar</button>
                    <button id="modalRestaurantDeleteSucess" onclick="deleteDetailSucess()" type="submit">Aceptar</button>
                </div>
            </dialog>

        </div>
            `
    })
}