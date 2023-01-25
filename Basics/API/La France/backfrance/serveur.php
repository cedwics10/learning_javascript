<?php
$connexion = mysqli_connect('localhost', 'root', '', 'france2022');
if (isset($_GET['region_code'])) {
    $query = mysqli_query($connexion, 'SELECT * FROM departement WHERE region_code = ' . $_GET['region_code']);
    $tableau = mysqli_fetch_assoc($query);
    print(json_encode($tableau));
} elseif (isset($_GET['departement'])) {
    $query = mysqli_query($connexion, 'SELECT * FROM departement WHERE region_code = ' . $_GET['region_code']);
    $tableau = mysqli_fetch_assoc($query);
    print(json_encode($tableau));
} else {
}
