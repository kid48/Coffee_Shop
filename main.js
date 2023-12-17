// Когда документ загружен и готов, начинается выполнение функций внутри.
$(document).ready(function() {

    // Запрос на получение HTML-содержимого для подвала (footer) страницы.
    $.ajax({
        url: 'components/footer.html', // Указывает путь к файлу, который нужно загрузить.
        method: 'GET', // Метод запроса HTTP - здесь используется GET для получения данных.
        success: function(data) {
            // В случае успешного выполнения запроса содержимое файла 'footer.html'
            // будет помещено в элемент с id 'footerPlaceholder'.
            $('#footerPlaceholder').html(data);
        },
        error: function(request, status, error) {
            // В случае ошибки при выполнении запроса в консоль будет выведено сообщение об ошибке.
            console.error('Fetch Error:', error);
        }
    });

    $.ajax({
        url: 'components/header.html', // Указывает путь к файлу, который нужно загрузить.
        method: 'GET', // Метод запроса HTTP - здесь используется GET для получения данных.
        success: function(data) {
            // В случае успешного выполнения запроса содержимое файла 'footer.html'
            // будет помещено в элемент с id 'footerPlaceholder'.
            $('#headerPlaceholder').html(data);
        },
        error: function(request, status, error) {
            // В случае ошибки при выполнении запроса в консоль будет выведено сообщение об ошибке.
            console.error('Fetch Error:', error);
        }
    });

    // Логика для выпадающего меню (dropdown menu).
    // Отслеживание кликов по элементу с классом 'hamburger1'.
    $('.hamburger1').click(function() {
        // При клике на элемент с классом 'hamburger1' будет переключаться видимость
        // меню с классом 'menu1' путем добавления или удаления класса 'hidden'.
        // Если класс 'hidden' присутствует, меню скрыто. Если отсутствует - меню отображается.
        $('.menu1').toggleClass('hidden');
    });
});

