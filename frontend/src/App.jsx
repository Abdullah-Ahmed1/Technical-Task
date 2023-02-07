import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import './App.css'
import Books from './components/books';
import AddBookModal from './components/addBook';
import axios from "axios";



function App() {
  const [open,setOpen] = useState(false)
  const [books, setBooks] = useState([])
  const [updateId,setUpdateId] = useState(null)
  const [book, setBook] = useState({
    title:"",
    author:"",
    no_of_pages: 0,
    published_at: new Date()
  }) 

  useEffect(()=>{
    axios.get("http://localhost:5000/book/show")
    .then(res=>{
      setBooks(res.data)
    })
  },[])

  const clearBookState = () => {
    console.log('gdsgdsfgsdfg')
    setBook({
      title:"",
      author: "",
      no_of_pages:0,
      published_at:new Date()

    })
  }
  const handleClose = ()=>{
    setOpen(false)
    clearBookState()
    axios.get("http://localhost:5000/book/show")
    .then(res=>{
      setBooks(res.data)
    })
  }
  const handleSubmit = async()=>{
    await axios.post("http://localhost:5000/book/create",book)
    handleClose()
    clearBookState()
}
   const handleDelete = (id)=>{
    console.log(id)
    axios.delete(`http://localhost:5000/book/delete/${id}`)
    .then(()=>{
      axios.get("http://localhost:5000/book/show")
      .then(res=>{
        setBooks(res.data)
      })  
    })
   }

  //  const handleSetBook  = (key,value)=>{
  //   console.log("->>",key,value)
  //     setBook({...book,key:value})
  //  }
   const handleUpdate=(id)=>{
    setUpdateId(id)
    setOpen(true)
    
      books.forEach((book)=>{
        if(book._id === id){ 
          setBook({
            title:book.title,
            author: book.author,
            no_of_pages:book.no_of_pages,
            published_at:book.published_at

          })
        }
      })
   }
  return (
    <div  className="App">
      <AddBookModal open={open} handleClose = {handleClose}  updateId={updateId}  handleSubmit = {handleSubmit} bookDetail = {book} />
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1 style={{color:"black",textAlign:"center"}}>Book Operations</h1>
        <Button onClick={()=>{setOpen(true); setUpdateId(null)}} variant='contained'>Add</Button>
      </div>
     
      {/* <AddBook/> */}
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Books books = {books} handleDelete = {handleDelete} handleUpdate = {handleUpdate} />
      </div>
      
     </div>

     
  )
}

export default App
