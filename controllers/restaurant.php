<?php
require_once('../models/RestaurantModel.php');

$controller = $_GET['controller'];

switch ($controller) {
    case 'createRestaurant':
        createRestaurant();
        break;
    case 'getRestaurant':
        getRestaurant();
        break;
    case 'editRestaurant':
        editRestaurant();
        break;
    case 'deleteRestaurant':
        deleteRestaurant();
        break;
    default:
        echo 'Invalid controller';
        break;
}

function createRestaurant(){
    $name = $_POST['name'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];

    $restaurant = new RestaurantModel();
    echo json_encode($restaurant->createRestaurant($name, $address, $phone));
}

function getRestaurant(){
    $restaurant = new RestaurantModel();
    echo json_encode($restaurant->getRestaurant());
}
function editRestaurant(){
    $name = $_POST['newName'];
    $address = $_POST['newAddress'];
    $phone = $_POST['newPhone'];
    $id = $_POST['id'];

    $restaurant = new RestaurantModel();
    echo json_encode($restaurant->editRestaurant($name, $address, $phone, $id));
}
function deleteRestaurant(){
    $id = $_POST['id'];

    $restaurant = new RestaurantModel();
    echo json_encode($restaurant->deleteRestaurant($id));
}