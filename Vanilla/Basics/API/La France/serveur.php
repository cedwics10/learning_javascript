<?php
$connexion = mysqli_connect('localhost', 'root', '', 'france2022');
if (isset($_GET['region_code'])) {
    $sql = 'SELECT * FROM departement WHERE region_code = ' . $_GET['region_code'];
} elseif (isset($_GET['departement_code'])) {
    $sql =  'SELECT * FROM city WHERE departement_code = ' . $_GET['departement_code'];
} else {
    $sql = 'SELECT * FROM region';
}

$query = mysqli_query($connexion, $sql);
$tableau = mysqli_fetch_all($query, MYSQLI_ASSOC);
print(json_encode($tableau));
