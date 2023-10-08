<?php
require_once("../models/index.php");
class RestaurantModel extends DbConection
{
    function createRestaurant($name, $address, $phone)
    {
        $creationDate = date("Y-m-d H:i:s");
        $updatedDate = date("Y-m-d H:i:s");

        $query = $this->db->connect()->prepare("INSERT INTO details(nombre, direccion, telefono, created_at, updated_at) 
                                               VALUES (?, ?, ?, ?, ?)");

        $query->bindParam(1, $name);
        $query->bindParam(2, $address);
        $query->bindParam(3, $phone);
        $query->bindParam(4, $creationDate);
        $query->bindParam(5, $updatedDate);

        $select = $this->db->connect()->prepare("SELECT * FROM details");

        try {
            $query->execute();
            $select->execute();
            $allRestaurant = $select->fetchAll();
            return $allRestaurant;
        } catch (PDOException $e) {
            return [false];
        }
    }

    function getRestaurant()
    {
        $query = $this->db->connect()->prepare("SELECT * FROM details");

        try {
            $query->execute();
            $allRestaurant = $query->fetchAll();
            return $allRestaurant;
        } catch (PDOException $e) {
            return [false, $e];
        }
    }
    function editRestaurant($name, $address, $phone, $id)
    {
        $updatedDate = date("Y-m-d H:i:s");

        $query = $this->db->connect()->prepare("UPDATE details
                                                SET nombre = ?, direccion = ?, telefono = ?, updated_at = ?
                                                WHERE id = ?;");


        $query->bindParam(1, $name);
        $query->bindParam(2, $address);
        $query->bindParam(3, $phone);
        $query->bindParam(4, $updatedDate);
        $query->bindParam(5, $id);


        $select = $this->db->connect()->prepare("SELECT * FROM details");

        try {
            $query->execute();
            $select->execute();
            $allRestaurant = $select->fetchAll();
            return $allRestaurant;
        } catch (PDOException $e) {
            return [$e];
        }
    }
}
