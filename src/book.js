function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  const character = {
    name,
    age,
    pronouns,
  };
  return character;
}

function saveReview(review, reviews) {
  if (reviews.includes(review)) return;
  reviews.push(review);
  return reviews;
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(title, character, genre) {
  const book = {
    title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre,
  };
  return book;
}

function editBook(book) {
  const originalPageCount = book.pageCount;
  const pagesReduced = originalPageCount * 0.25;
  book.pageCount = originalPageCount - pagesReduced;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};
