let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const individualBook = document.createElement('div');
        individualBook.classList.add('book');
        individualBook.innerHTML = `
            <h3>Title: ${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button class="remove-book"></button>
        `;
        bookList.appendChild(individualBook);

        //Event listener for remove button - removes book from the myLibrary array at the position specified by the index
        const removeButton = individualBook.querySelector('.remove-book');
        removeButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });
    });
}

function addSampleBooks() {
    const sampleBooks = [
        new Book('The Hobbit', 'J.R.R. Tolkien', 295, true),
        new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 398, true),
        new Book('The Two Towers', 'J.R.R. Tolkien', 327, true),
        new Book('1984', 'George Orwell', 328, false),
        new Book('Animal Farm', 'George Orwell', 112, false)
    ];

    sampleBooks.forEach(book => {
        addBookToLibrary(book);
    });
}

document.getElementById('book-form-content').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();
    this.reset();
});

function initializeLibrary () {
    addSampleBooks();
    displayBooks();
}

document.addEventListener('DOMContentLoaded', initializeLibrary);