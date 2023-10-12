// Подгрузка footer
document.addEventListener("DOMContentLoaded", function () {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footerPlaceholder').innerHTML = data;
        })
        .catch((error) => {
            console.error('Fetch Error: ', error);
        });
});
// Dropdown logic
const menu = document.getElementsByClassName('menu1')[0];
const hamburger = document.getElementsByClassName('hamburger1')[0];

hamburger.addEventListener('click', function () {
    menu.classList.toggle("hidden");
})