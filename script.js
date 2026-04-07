const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
  let userBook = new Book(title, author, pages);
  myLibrary.push(userBook);
}

function displayBooks() {
  for (let arr in myLibrary) {
    console.log(myLibrary[arr]);
  }
}
