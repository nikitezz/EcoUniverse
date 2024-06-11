<?php
// Параметры для подключения к базе данных
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "projectcourse";

// Получение данных из формы регистрации
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Создание подключения к базе данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка наличия ошибок при подключении
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

// Подготовка SQL-запроса для вставки данных пользователя
$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

// Выполнение SQL-запроса
if ($conn->query($sql) === TRUE) {
    echo "Регистрация успешна!";
} else {
    echo "Ошибка при регистрации: " . $conn->error;
}

// Закрытие подключения к базе данных
$conn->close();
?>