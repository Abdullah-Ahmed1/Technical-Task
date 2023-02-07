import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {  TextField } from '@mui/material';
import dayjs from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  display:"flex",
  flexDirection:"column",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddBookModal({open, handleClose,bookDetail,updateId}) {
    console.log("------111",updateId)

    const [book,setBook] = React.useState({
        title:"",
        author:"",
        no_of_pages: 0,
        published_at: new Date()
    })
//--------------------------------------------------------------


  

    const handleSubmit = ()=>{
        
        if(!updateId){
            axios.post("http://localhost:5000/book/create",{
            title:book.title,
            author:book.author,
            no_of_pages:book.no_of_pages,
            published_at:book.published_at
        })
        .then(()=>{
            setBook({
                title:"",
                author:"",
                    no_of_pages: 0,
                published_at: new Date()
            })
            handleClose()
        })
        }else{
            axios.put(`http://localhost:5000/book/update/${updateId}`,{
                title:book.title,
                author:book.author,
                no_of_pages:book.no_of_pages,
                published_at:book.published_at
            })
            .then(()=>{
                handleClose()
            })
        }
        
    }

    React.useEffect(()=>{
        console.log(">>>>>>",open)
        if(open){
            setBook(bookDetail)
        }
        
    },[open])

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}
          component="form"
          
        >
            <h2 style={{color:"black",textAlign:"center"}}>{updateId !==null? "UPDATE":"ADD"}</h2>

            <TextField  value={book.title} onChange={(e)=>{setBook({...book,title:e.target.value})}} sx = {{padding:"10px 0px"}} id="outlined-basic" label="Title" variant="outlined"    required/>

            <TextField value={book.author} onChange={(e)=>{setBook({...book,author:e.target.value})}} sx = {{padding:"10px 0px"}} id="outlined-basic" label="Auhtor" variant="outlined"  />

            <TextField value={book.no_of_pages} onChange={(e)=>{setBook({...book,no_of_pages:e.target.value})}} sx = {{padding:"10px 0px"}} id="outlined-basic" type={"number"} label="Pages" variant="outlined" />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                
                        label="Date of publish"
                        inputFormat="MM/DD/YYYY"
                        value={book.published_at}
                        onChange={(value)=>setBook({...book,published_at:value})}
                        renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <Button sx ={{padding:"10px 0px"}} onClick={handleSubmit} variant='contained'>Add
            </Button>
        </Box>
      </Modal>
    </div>
  );
}
