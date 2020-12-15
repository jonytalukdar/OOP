var book = {
  name: 'functional Javascript',
  author: 'beil fogas',
  publisher: "O'really",
  page: 231,
  rate: 350,
  print: function () {
    console.log(this.name, this.author);
  },
};

book.publishedYear = 2012;
book['edition'] = '6th';

// book.print();
// console.log(book);

console.log('Book name : ' + book.name);
console.log('book author : ' + book['author']);
console.log('published year : ' + book.publishedYear);
console.log('book edition : ' + book.edition);

for (var props in book) {
  //   console.log(props);
  console.log(props + ' = ' + book[props]);
}
