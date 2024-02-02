//Books
const books = [
    { title: 'Book One', author: 'Dr.prem', publish: 2023, edition: 2004 },
    { title: 'Book Two', author: 'D.K goyal', publish: 1992, edition: 2008 },
    { title: 'Book Three', author: 'Simran', publish: 1999, edition: 2007 },
    { title: 'Book Four', author: 'D.K goyal', publish: 2015, edition: 2010 },
    { title: 'Book Five', author: 'Rabindranath', publish: 2010, edition: 2014 },
    { title: 'Book Six', author: 'Dr.prem', publish: 2012, edition: 2010 },
    { title: 'Book Seven', author: 'Rabindranath', publish: 1986, edition: 1996 },
    { title: 'Book Eight', author: 'D.K goyal', publish: 2011, edition: 2016 },
    { title: 'Book Nine', author: 'Dr.prem', publish: 1981, edition: 1989 },
  ];
  
  //Filter to search books and capitalised author name
  const booksBelow2010 = books.filter((book)=> book.publish <=2010)
  .map((book)=>{
      return {...book , author: book.author.toLocaleUpperCase()}
    })

  console.log(booksBelow2010);
  //Output==>
//   [
//     {
//       title: 'Book Two',
//       author: 'D.K GOYAL',
//       publish: 1992,
//       edition: 2008
//     },
//     {
//       title: 'Book Three',
//       author: 'SIMRAN',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Five',
//       author: 'RABINDRANATH',
//       publish: 2010,
//       edition: 2014
//     },
//     {
//       title: 'Book Seven',
//       author: 'RABINDRANATH',
//       publish: 1986,
//       edition: 1996
//     },
//     {
//       title: 'Book Nine',
//       author: 'DR.PREM',
//       publish: 1981,
//       edition: 1989
//     }
//   ]
