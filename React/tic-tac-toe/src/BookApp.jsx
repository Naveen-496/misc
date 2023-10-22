
import { useEffect, useState } from "react"


const BookApp = () => {

  const[books, setBooks] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[fetchFailed, setFetchFailed] = useState(false);

   const data = loadBooks();
   useEffect(() =>{
    setBooks(data);
   },[data])
  
  return (
    <div className="book-app">
      { <BookList books={books} />}

      <p>{fetchFailed && <p>Failed fetch the Data</p>}</p>
    </div>
  )
}

const BookList = ({books}) =>{
   return(
    <ul className="book-list">
        {books.map((book) => {
          <li key={book.id}>{book.title}</li>
        })}
    </ul>
   )
}

export default BookApp


  function loadBooks(){
    return bookData;
  }

const bookData= [
  { 'id' : '01',
    'title' : 'forrest Gump',
    author : 'Naveen Reddy',
    image : 'assets/img1.jpeg'},

  { id : '01',
    title : 'forrest Gump',
    author : 'Naveen Reddy',
    image : 'assets/img1.jpeg'},

  { id : '01',
    title : 'forrest Gump',
    author : 'Naveen Reddy',
    image : 'assets/img1.jpeg'},

  { id : '01',
    title : 'forrest Gump',
    author : 'Naveen Reddy',
    image : 'assets/img1.jpeg'}
]
