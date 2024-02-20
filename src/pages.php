<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Ionic App</title>
</head>
<body>
    <?php
        $connect = mysqli_connect("localhost", "root", "", "essbd");
        $filename = "page.json";
        $data = file_get_contents($filename);
        $array = json_decode($data, true);
        foreach ($array as $row) {
            $sql = "INSERT INTO TABLE etudiant(prenom, nom) VALUES ('".$row[prenom]."' , '".$row[nom]."')";
            mysqli_query($connect, $sql);

            # code...
        }
        echo "données inserees";

    ?>
</body>