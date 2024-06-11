<?php
// Подключение к базе данных
$servername = "localhost";
$username = "root";
$password = "admin";
$dbname = "courseproject";

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];

    $sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";

    if ($conn->query($sql) === true) {
        echo "Регистрация прошла успешно!";
    } else {
        echo "Ошибка регистрации: " . $conn->error;
    }
}

$conn->close();
?>