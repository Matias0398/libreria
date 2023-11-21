document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const books = document.querySelectorAll("figure"); // Selecciona todos los elementos de libros

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();

        books.forEach(function(book) {
            const bookDescription = book.querySelector("figcaption").textContent.toLowerCase();
            if (bookDescription.includes(searchTerm)) {
                book.classList.add("match"); // Agrega una clase "match" a los elementos coincidentes
            } else {
                book.classList.remove("match"); // Elimina la clase "match" de los elementos no coincidentes
            }
        });
    });
});





