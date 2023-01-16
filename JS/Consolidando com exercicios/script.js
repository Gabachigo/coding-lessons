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
  }
];

let totalCategories = function total() {
  for (let category of bookByCategory) {
    total += 1
  }
};