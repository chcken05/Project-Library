const addBook = document.getElementById("addBook");
const myDialog = document.getElementById("my-dialog");
const outputBox = document.querySelector("output");
const submitForm = document.getElementById("submit");

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = false;
  this.id = crypto.randomUUID();
}

function renderBook(book) {
  const card = document.createElement("div");
  card.className = "card";
  const title = document.createElement("h3");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = book.author;

  const pages = document.createElement("p");
  pages.textContent = book.pages;
  const cardBtn = document.createElement("div");
  cardBtn.className = "card-btn";
  card.append(cardBtn);
  const toggleRead = document.createElement("button");
  toggleRead.className = "toggleRead";
  toggleRead.textContent = "Toggle Read";
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove";
  removeBtn.textContent = "Delete";
  cardBtn.append(toggleRead, removeBtn);

  card.append(title, author, pages, cardBtn);
  outputBox.append(card);

  document.getElementById("title").value = "";

  toggleRead.addEventListener("click", () => {
    book.status = !book.status;
    card.classList.toggle("read");
  });

  removeBtn.addEventListener("click", () => {
    const index = myLibrary.findIndex((b) => b.id === book.id);
    if (index !== -1) myLibrary.splice(index, 1);
    card.remove();
  });
}

function addBookToLibrary(title, author, pages) {
  let userBook = new Book(title, author, pages);
  myLibrary.push(userBook);
  renderBook(userBook);
}

function displayBooks() {
  for (let arr in myLibrary) {
    console.log(myLibrary[arr]);
  }
}

myDialog.addEventListener("close", () => {
  if (myDialog.returnValue === "submit") {
    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
    const bookPages = document.getElementById("pages").value;
    addBookToLibrary(bookTitle, bookAuthor, bookPages);
  }

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
});
