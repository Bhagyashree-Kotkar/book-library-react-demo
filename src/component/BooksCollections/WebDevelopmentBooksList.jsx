import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { addTocart } from '../../services/user.services';
import swal from 'sweetalert';
import { useNavigate } from 'react-router';

export default function WebDevelopmentBooksList() {

  const navigate = useNavigate();
    // set state
  const [books, setBooks] = useState([]);

  // first data grab
    useEffect(() => {
      fetch("http://localhost:3001/books?categories=Web%20Development") // your url may look different
        .then(resp => resp.json())
        .then(data => setBooks(data)) // set data to state
    }, []); 

  return (
    <div>
        <br/><br/>
        {/* iterate through the books array and render a unique book component for each book object in the array */}
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        { books.map(book => 
        <Grid item xs={4} key={book.id}>
        <Card sx={{ maxWidth: 400, height: 600, margin: "0 auto", padding: "0.1em" }}>
      <CardMedia 
        component="img"
        sx={{ width: 400, height: 200, alignItems: 'center', padding: "1em 1em 0 1em", objectFit: "contain" }}
        image = { book.thumbnailUrl }
        title="Book1"
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h6" component="div">
          { book.title }
        </Typography>
        <Typography variant="body2" color='text.secondary' sx={{minHeight: "30px"}}>
            { book.shortDescription }
          </Typography>
      </CardContent>
      <CardActions sx={{ alignItems: 'center' }}>
        <Box textAlign='center'>
            <Button onClick={() => {
              addTocart(book).then(res =>  {
                if(res.status === 200) {
                swal('Book added to Cart');
              }  else {
                swal(res.json());
              }
            });
          }} size="small">Add to Cart</Button>
            <Button onClick={() => {
                let bookId = book.id;
                navigate('/learnMore',{state:{id:bookId}});
                }} size="small">Learn More</Button> 
        </Box>
      </CardActions>
    </Card>
    </Grid>
    ) }
    </Grid>
    <br/><br/>
    </div>
  );
}
