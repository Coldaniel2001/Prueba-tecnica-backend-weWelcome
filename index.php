<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba Tecnica</title>
    <link rel="stylesheet" href="./assets/css/restaurant.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="./assets/css/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="./assets/css/crudRestaurant.css?v=<?php echo time(); ?>">

    <script src="./assets/js/createRestaurant.js?v=<?php echo time(); ?>" defer></script>
    <script src="./assets/js/getRestaurant.js?v=<?php echo time(); ?>" defer></script>
    <script src="./assets/js/editRestaurant.js?v=<?php echo time(); ?>" defer></script>
    <script src="./assets/js/deleteRestaurant.js?v=<?php echo time(); ?>" defer></script>
</head>

<body>
    <section>
        <div class="title__main__container">
            <h2>
                inserción de nuevos restaurantes
            </h2>
            <div class="title__main">
                <dialog id="modalRestaurantCreate">
                    <form id="formCreateRestaurant">
                        <label>Nombre: <input type="text" id="name"> </label>
                        <label>Dirección: <input type="text" id="address"> </label>
                        <label>Telefono: <input type="number" id="phone"> </label>
                        <span id="spanPopUpIncorrect">Tienes que rellenar el formulario para crear un nuevo restaurante</span>
                    </form>
                    <div>
                        <button id="modalRestaurantCreateClose" autofocus>Cerrar</button>
                        <button id="modalRestaurantCreateSucess" type="submit">Aceptar</button>
                    </div>
                </dialog>
                <button id="registerNewRestaurant" class="restaurant__button--created"> <img class="icons__register" src="./assets/images/Create_Icons.png" alt="create restaurant">Registrar un nuevo restaurante</button>
            </div>
        </div>

        <div class="description__container">
            <div>
                <span class="bold__description" >ID</span>
            </div>
            <div>
                <span class="bold__description">Nombre</span>
            </div>
            <div>
                <span class="bold__description">Dirección</span>
            </div>
            <div>
                <span class="bold__description">Telefono</span>
            </div>
            <div>
                <span class="bold__description">Fecha de creación</span>
            </div>
            <div>
                <span class="bold__description">Fecha de ultima actualización</span>
            </div>

            <div>
                <span class="bold__description">Acciones</span>
            </div>

        </div>

        <div id="dataRestaurant">

        </div>

    </section>
</body>

</html>