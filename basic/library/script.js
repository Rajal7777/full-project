//main array to store book
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

Book.prototype.hasRead = function () {
  if (!this.isRead) {
    return "Not read yet";
  } else {
    return "Already read";
  }
};

//fun to add a new book to myLibrary
function addBookToLibrary(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

const listBooks = document.querySelector("ul");

//clear the book
function clearBooks() {
  listBooks.innerHTML = "";
}

//test adding book
addBookToLibrary("Altra Learining", "Scout young", "356", false);

//show the books in ui
function showBooks(myLibrary) {
  myLibrary.forEach((book, index) => {
    const bookLi = document.createElement("li");
    const removeBtn = document.createElement("button");
    const readToggleBtn = document.createElement("button");
    const readStatus = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");

    //add class
    readStatus.textContent = `Read Status: ${book.hasRead()}`;
    bookLi.classList = "book-card";
    readToggleBtn.classList = "readToggleBtn";
    readToggleBtn.textContent = "Read/Not Read";

    //select the class and insert the text for each input by user
    //alter the text on the li tag to display on the web page
    bookLi.textContent = `${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    removeBtn.textContent = "Remove";
    removeBtn.id = book.id;

    //find the index of the book to be remove and use splice and remove 1 item from that index and push back
    removeBtn.addEventListener("click", (event) => {
      const index = myLibrary.findIndex((book) => book.id === removeBtn.id);
      myLibrary.splice(index, 1);
      showBooks(myLibrary);
    });

    readToggleBtn.addEventListener("click", () => {
      if (book.isRead) {
        book.isRead = false;
        readStatus.textContent = `Read Status: ${book.hasRead()}`;
      } else {
        book.isRead = true;
        readStatus.textContent = `Read Status: ${book.hasRead()}`;
      }
    });

    //append the book onto ul.
    listBooks.appendChild(bookLi);
    bookLi.appendChild(author);
    bookLi.appendChild(pages);
    bookLi.appendChild(readStatus);
    bookLi.appendChild(readToggleBtn);
    bookLi.appendChild(removeBtn);
  });
}

showBooks(myLibrary);

//select the btn to add and select form
const newBookBtn = document.querySelector(".new-book-btn");
const bookForm = document.querySelector("#book-form");

function toggleDisplay() {
  bookForm.classList.toggle("hidden");
  bookForm.classList.toggle("active");
}

newBookBtn.addEventListener("click", toggleDisplay);

const submitBook = document.querySelector(".new-book-submit-btn");

//add e to the submit btn in form
submitBook.addEventListener("click", (event) => {
  //to prevent the defualt form submission to a server
  event.preventDefault();
  console.log("submit button clicked");
  console.log(myLibrary);

  //get the form item
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const isRead = document.querySelector("#isRead");

  //add to  the array of books
  addBookToLibrary(title.value, author.value, pages.value, isRead.checked);

  //To Clear form after submitting new book
  title.value = "";
  author.value = "";
  pages.value = "";
  isRead.checked = false;

  //Clear the old list
  clearBooks();

  showBooks(myLibrary);
});
