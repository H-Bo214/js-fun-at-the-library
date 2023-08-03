function shelfBook(book, shelfGenre) {
  if (shelfGenre.length < 3) {
    shelfGenre.unshift(book);
  }
  return shelfGenre;
}

function unshelfBook(bookTitle, shelfGenre) {
  shelfGenre.forEach((book) => {
    const bookToRemove = shelfGenre.indexOf(book);
    if (book.title === bookTitle) {
      shelfGenre.splice(bookToRemove, 1);
    }
  });
}

function listTitles(shelfGenre) {
  const bookTitles = shelfGenre.reduce(
    (bookNames, book) => (bookNames += `${book.title}, `),
    ""
  );
  const formattedBookTitles = bookTitles.slice(0, bookTitles.lastIndexOf(","));
  return formattedBookTitles;
}

function searchShelf(shelfGenre, bookTitle) {
  let result = false;
  shelfGenre.forEach((book) => {
    if (book.title === bookTitle) {
      result = true;
    }
  });
  return result;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
