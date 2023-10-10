document.addEventListener("DOMContentLoaded", function() {
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