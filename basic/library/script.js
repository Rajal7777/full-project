// Global array to store books
const myLibrary = [];

function Book(title, author, pages, isRead) {
  if (!new.target) {
    throw Error("Use the new key");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// Cleaned up with a ternary operator
Book.prototype.hasRead = function () {
  return this.isRead ? "Already read" : "Not read yet";
};

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

const listBooks = document.querySelector("ul");

function clearBooks() {
  listBooks.innerHTML = "";
}

// Test book
addBookToLibrary("Ultra Learning", "Scott Young", "356", false);

// Removed the redundant myLibrary parameter since it's global
function showBooks() {
  // FIXED: Always clear old HTML at the very start of rendering
  clearBooks();

  // Native 'index' used directly, removing the need for findIndex()
  myLibrary.forEach((book, index) => {
    const bookLi = document.createElement("li");
    const titleH3 = document.createElement("h3"); // Cleaner than loose textContent
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const readStatus = document.createElement("p");
    const readToggleBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    bookLi.classList.add("book-card");
    readToggleBtn.classList.add("readToggleBtn");

    titleH3.textContent = book.title;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    readStatus.textContent = `Read Status: ${book.hasRead()}`;
    readToggleBtn.textContent = "Read/Not Read";
    removeBtn.textContent = "Remove";

    // REDUNDANCY FIXED: Uses the native loop index directly
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      showBooks();
    });

    // REDUNDANCY FIXED: Uses direct boolean inversion
    readToggleBtn.addEventListener("click", () => {
      book.isRead = !book.isRead;
      readStatus.textContent = `Read Status: ${book.hasRead()}`;
    });

    // Clean structural appending
    bookLi.appendChild(titleH3);
    bookLi.appendChild(author);
    bookLi.appendChild(pages);
    bookLi.appendChild(readStatus);
    bookLi.appendChild(readToggleBtn);
    bookLi.appendChild(removeBtn);
    listBooks.appendChild(bookLi);
  });
}

// Initial render
showBooks();

// Form selectors
const newBookBtn = document.querySelector(".new-book-btn");
const bookForm = document.querySelector("#book-form");
const submitBook = document.querySelector(".new-book-submit-btn");

function toggleDisplay() {
  bookForm.classList.toggle("hidden");
  bookForm.classList.toggle("active");
}

newBookBtn.addEventListener("click", toggleDisplay);

submitBook.addEventListener("click", (event) => {
  event.preventDefault();

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const isRead = document.querySelector("#isRead");

  addBookToLibrary(title.value, author.value, pages.value, isRead.checked);

  // Clear inputs
  title.value = "";
  author.value = "";
  pages.value = "";
  isRead.checked = false;

  // Re-render updated state
  showBooks();
});
