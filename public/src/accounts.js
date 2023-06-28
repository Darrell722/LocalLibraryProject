function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id == id);
  return(found);
}

function sortAccountsByLastName(accounts) {
  accounts.sort ((accountA, accountB,) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1:-1);
  return(accounts);
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);
    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {

  return books

    .filter((book) => {

      const recent = book.borrows[0];

      return !recent.returned && recent.id === account.id;

    })

    .map((book) => {

      const author = authors.find((author) => author.id === book.authorId);

      return { ...book, author };

    });

}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

