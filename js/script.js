document.getElementById("productOrderForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращает отправку формы, если есть ошибки

    const productName = document.getElementById("product_name").value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    const email = document.getElementById("email").value.trim();
    const deliveryDate = document.getElementById("delivery_date").value.trim();
    const errorMessage = document.getElementById("error_message");
    
    

    let errors = [];

    // Проверка поля "Название продукта"
    if (!productName) {
        errors.push("Поле 'Название продукта' обязательно для заполнения.");
    } else if (productName.length < 3) {
        errors.push("Название продукта должно содержать минимум 3 символа.");
    }

    // Проверка поля "Количество"
    if (!quantity || isNaN(quantity) || quantity <= 0) {
        errors.push("Количество должно быть положительным числом.");
    }

    // Проверка поля "Email"
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.push("Поле 'Email' обязательно для заполнения.");
    } else if (!emailPattern.test(email)) {
        errors.push("Введите корректный email.");
    }

    // Проверка поля "Дата доставки"
    const today = new Date().toISOString().split("T")[0];
    if (!deliveryDate) {
        errors.push("Поле 'Дата доставки' обязательно для заполнения.");
    } else if (deliveryDate < today) {
        errors.push("Дата доставки не может быть в прошлом.");
    }

    // Отображение ошибок или вывод данных
    if (errors.length > 0) {
        errorMessage.innerHTML = errors.join("<br>");
    } else {
        errorMessage.innerHTML = ""; // Очищаем ошибки

        // Формируем сообщение с введенными данными
        const message = `
            Введенные данные:
            Название продукта: ${productName}
            Количество: ${quantity}
            Email: ${email}
            Дата доставки: ${deliveryDate}
        `;
        alert(message); // Выводим сообщение
        form.reset();
    }
});

    const formProduct = document.getElementById('formProduct');
    formProduct.addEventListener("mouseover", () => {
        formProduct.style.color = "green";
    });
    formProduct.addEventListener("mouseout", () => {
        formProduct.style.color = "";
    });


    const submitButton = document.querySelector('.product-order form button');
    submitButton.addEventListener("mousedown", () => {
        submitButton.style.backgroundColor = "orange";
        submitButton.style.transform = "scale(1.1)";
    });
    // Убираем эффекты при отпускании кнопки
    submitButton.addEventListener("mouseup", () => {
        submitButton.style.backgroundColor = ""; 
        submitButton.style.transform = "scale(1)";
    });