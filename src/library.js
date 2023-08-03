function createLibrary(name) {
  const library = {
    name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
}

function addBook(library, book) {
  for (let shelf in library.shelves) {
    if (book.genre === shelf) {
      library.shelves[shelf].push(book);
    }
  }
}

function checkoutBook(library, bookTitle, genre) {
  for (let shelf in library.shelves) {
    if (shelf === genre) {
      const checkoutShelf = library.shelves[shelf];
      const bookToCheckout = checkoutShelf.find((book) => book.title === bookTitle) || null;
      if (bookToCheckout) {
        const indexOfBookToCheckout = checkoutShelf.indexOf(bookToCheckout);
        checkoutShelf.splice(indexOfBookToCheckout, 1);
        return `You have now checked out ${bookTitle} from the ${library.name}.`;
      }
      return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`;
    }
  }
}

function takeStock(library, genre) {
  const genreKeys = Object.keys(library.shelves);
  if (genre) {
    let result;
    genreKeys.forEach((key) => {
      if (key === genre) {
        const numOfBooks = library.shelves[key].length;
        result = `There are a total of ${numOfBooks} ${genre} books at the ${library.name}.`;
      }
    });
    return result;
  }
  const count = genreKeys.reduce((total, key) => (total += library.shelves[key].length), 0);
  return `There are a total of ${count} books at the ${library.name}.`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock,
};
