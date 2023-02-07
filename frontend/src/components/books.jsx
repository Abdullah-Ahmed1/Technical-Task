import Book from "./Book"

const Books = ({books ,handleDelete,handleUpdate})=>{
    return(
        <>
        {
            books.map((book)=>{
                return <Book key={book._id}  book = {book}  handleDelete = {handleDelete} handleUpdate={handleUpdate}/>
            })
        }
        </>
    )
}
export default Books