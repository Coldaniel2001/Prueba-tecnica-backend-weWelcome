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