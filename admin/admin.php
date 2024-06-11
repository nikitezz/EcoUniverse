<?php
$correct_password = "19732384"; // Пароль, который нужно ввести для входа
$admin_page = "admin-page01.html"; // Страница администратора

// Проверка, был ли отправлен пароль в URL
if (isset($_GET['password'])) {
    $password = $_GET['password'];

    // Проверка введенного пароля
    if ($password === $correct_password) {
        // Пароль верный, перенаправляем на страницу администратора
        header("Location: $admin_page");
        exit();
    } else {
        // Пароль неверный, выводим сообщение об ошибке
        echo "<h2>Неверный пароль. Доступ запрещен.</h2>";
    }
} else {
    // Пароль не был отправлен, перенаправляем на страницу входа
    header("Location: admin.html");
    exit();
}
?>