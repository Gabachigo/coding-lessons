/* 
  Task(translated):
  
    * Fetching and counting data in Arrays *
    Based on the Array of Books by Category below, do the following challenges
        - Count the number of categories and the number of books in each category
        - Count the number of authors
        - Show books by the author Augusto Cury(Meat as my example)
        - Transform the function above into a function that will receive the author's name and return the books of that author.
*/

// making book category(non existant books and authors)
const bookByCategory = [
  {
    category: "Big money",
    book: [
      {
        title: "Lottery",
        author: "Danquavious Midlenut"
      },
      {
        title: "Big money 2.0",
        author: "Quagwavious"
      },
      {
        title: "Yeat keeps on evolving",
        author:"Meat"
      }
    ],
  },
  {
    category: "Big poor",
    book: [
      {
        title: "Prision",
        author: "Danquavious Midlenut"
      },
      {
        title: "I sharted",
        author: "Quagwavious"
      },
      {
        title: "Yeat keeps on losing money",
        author:"Meat"
      }
    ],
  },
  {
    category: "Big emotions",
    book: [
      {
        title: "I sharting tears",
        author: "Danquavious Midlenut"
      },
      {
        title: "Danquavious foul Fanquavious",
        author: "Quagwavious"
      },
      {
        title: "Food makes me cry",
        author:"Meat"
      }
    ],
  },
];

const totalCategories = bookByCategory.length
let totalBooks = 0
let categoryIndex = 0
authors = []


for ( let i = 0; i < totalCategories; i++ ) {
  // total books being calculated here
  let booksInCategory = bookByCategory[i].book.length
  totalBooks += booksInCategory
  // adding authors to an array
  for ( let i = 0; i < booksInCategory; i++ ) {
    let authorCheck = authors.indexOf(bookByCategory[categoryIndex].book[i].author)
    
    // checking if author is already added to array(index value will equal -1)
    if ( authorCheck < 0 ) {
      authors.push(bookByCategory[categoryIndex].book[i].author)
    }
    
  }
  
  categoryIndex += 1
}

function booksByMeat(library) {
  // making an array of books
  let booksByMeat = []
  let libIndex = 0
  for ( let i = 0; i < bookByCategory.length; i++ ) {
    // amount of books by category
    let booksInCategory = library[libIndex].book.length
    
    // checking if author is Meat
    for (let i = 0; i < booksInCategory; i++) {
      if ( library[libIndex].book[i].author == "Meat" ) {
        booksByMeat.push(library[libIndex].book[i].title)
      }
      
    }
    
    libIndex += 1
  }
  
  console.log(`The books by "Meat" are: ${booksByMeat}`)
}

console.log(`There are ${totalCategories} categories in total`)
console.log(`There are ${totalBooks} books in total`)
console.log(`There are ${authors.length} authors in total`)
booksByMeat(bookByCategory)