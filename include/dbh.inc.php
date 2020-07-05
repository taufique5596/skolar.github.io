<?php 
    $server = "sql201.epizy.com";
    $username = "epiz_26152905";
    $password = "UeFicOFpLXFXzT";
    $dbname = "epiz_26152905_database_skolar";

    $conn = mysql_connect($server, $username, $password, $dbname);

    if(!$conn){
        die("connection Failed:".mysql_connect_error());
    }
?>