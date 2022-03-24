<?php

$host = 'localhost';
$root = 'root';
$pass = '';
$dbname = 'peakit';
$dbtable = 'jokes';

// Connection:
$conn = new PDO("mysql:host=localhost;", $root, $pass);
// set the PDO error mode to exception
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// First: Create new database
try
{
    $sql = "CREATE DATABASE $dbname";
    $conn->exec($sql);

    echo "Database $dbname created successfully";
}
catch(PDOException $e)
{
    die("DB ERROR: " . $e->getMessage());
}


// Second: Create new table inside newly created database
try
{

    $conn->exec('USE ' . $dbname);

    $sql = "CREATE TABLE $dbtable (
      id INT PRIMARY KEY,
      user_id INT,
      title VARCHAR(255),
      body VARCHAR(255)
    )";

    $conn->exec($sql);

    echo "Table $dbtable created successfully ";

}
catch(PDOException $e)
{
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null; // Close connection

?>