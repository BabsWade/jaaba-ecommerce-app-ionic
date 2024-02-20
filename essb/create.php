<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$nomproduit = $data['nomproduit'];
$categorieproduit = $data['categorieproduit'];
$imageproduit = $data['imageproduit'];

$q = mysqli_query($con, "INSERT INTO PRODUITS (nomproduit, categorieproduit, imageproduit ) VALUES ('$nomproduit', '$categorieproduit', '$imageproduit')");

if($q){
    http_response_code(201);
    $message['status'] = "succes";

}else{
    http_response_code(422);
    $message['status'] = "error";
}

echo json_encode($message);
echo mysqli_error($con);
?>