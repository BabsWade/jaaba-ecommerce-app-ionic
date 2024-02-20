<?php
include "config.php";

$data = array();
$numeroproduit = $_GET['numeroproduit'];
$q = mysqli_query($con, "SELECT * FROM `PRODUITS` WHERE `numeroproduit` = '$numeroproduit' LIMIT 3");

while($row = mysqli_fetch_object($q)){
    $data[] = $row;

}
echo json_encode($data);
echo mysqli_error($con);
?>