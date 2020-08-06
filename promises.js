class Book {
  constructor(title, author, year) {
    this.title = title, 
    this.author = author, 
    this.year = year 
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year} year`
  }

  revise(newYear) {
    this.year = newYear; 
    this.revised = true; 
  }

  static topBookStore() {
    return 'Barnes and Noble'
  }
}

//instantiate an object 
const book1 = new Book('book 1', 'John Doe', '2015')

book1.revise("1995")
console.log(Book.topBookStore()

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year)
  }
}