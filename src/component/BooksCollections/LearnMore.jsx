import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useLocation} from 'react-router-dom';
import USerContext from '../../Context/UserContext';

export default function LearnMore() {

  const location = useLocation();
    // set state
  const [books, setBooks] = useState([]);

  // first data grab
  useEffect(() => {
    let id = location.state.id;
    fetch('http://localhost:3001/books?id='+id) // your url may look different
    .then(resp => resp.json())
    .then(data => setBooks(data)) // set data to state
  }, [location.state.id]); 

return (
    <div>
        <br/><br/>
        <USerContext.Provider value={books}>
        {/* iterate through the books array and render a unique book component for each book object in the array */}
       { books.map(book => 
        <Card sx={{ width: '75%', height: 800, margin: "0 auto", padding: "0.1em" }}>
        <CardMedia 
        component="img"
        sx={{ width: 600, height: 300, alignItems: 'center', padding: "1em 1em 0 1em", objectFit: "contain" }}
        image = { book.thumbnailUrl }
        title="Book1"
      />
      <CardContent sx={{ width: '75%', textAlign: 'center' }}>
        <Typography gutterBottom variant="h6" component="div">
          { book.title }
        </Typography>
        <Typography variant="body2" color='text.secondary' sx={{minHeight: "30px"}}>
          { book.longDescription }
        </Typography> 
      </CardContent>
    </Card>)}
    </USerContext.Provider>
    <br/><br/>
    </div>
  );
}
