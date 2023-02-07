import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';

export default function Book({book,handleDelete,handleUpdate }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        
        '& > :not(style)': {
          m: 1,
          width:528,
          height: 200,
        },
      }}
    >
     <Paper sx = {{padding:"10px"}}>
        <Grid container flexDirection={"row"} justifyContent={"space-between"}>
            <Grid>
            <h4>Title:{book.title}</h4>
            <h4>Author:{book.author}</h4>
            <h4>No of Pages:{book.no_of_pages}</h4>
            <h4>Published at:{book.published_at}</h4>
                    
            </Grid>
            <Grid  >
               <Button onClick={()=>handleDelete(book._id)} >Delete</Button>
               <Button onClick={()=>handleUpdate(book._id)} >Update</Button>
            </Grid>
        </Grid>
     </Paper>
    </Box>
  );
}
