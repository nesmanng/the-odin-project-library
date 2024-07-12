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
            <button class="remove-book">Remove</button>
        `;
        bookList.appendChild(individualBook);

        // Add event listener to the remove button
        const removeButton = individualBook.querySelector('.remove-book');
        removeButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });
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

// Initial display of books
displayBooks();