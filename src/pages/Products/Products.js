import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

import Product from '../Product/Product';

// making all products section
const Products = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch('https://salty-cliffs-58044.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container className="mb-3" >
        <Typography variant="h6" sx={{ fontWeight: 'bold',my:1 }} className="text-danger" component="div">
          OUR PRODUCTS
        </Typography>
         <Typography variant="h6" sx={{ fontWeight: 'bold',my:1  }} className="text-warning" component="div">
          We ARE THE BEST SELLER IN THE WORLD
        </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                items.slice(0, 6).map(item => <Product
                    key={item._id}
                    item={item}
                ></Product>)
            }
        </Grid>
       </Container>
    </Box>
  );
};

export default Products;