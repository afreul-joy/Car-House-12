import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

// explore  section

const Explores = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://salty-cliffs-58044.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
     <>
      <Header />
            <Box sx={{ flexGrow: 1 }}>
            <Container className="mb-3" >
                <Typography variant="h6" sx={{ fontWeight: 'bold',my:1 }} className="text-" component="div">
                See All Our Products
                </Typography>
                <hr />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                 {
                    items.map(item => <Explore
                        key={item._id}
                        item={item}
                    ></Explore>)
                }
                </Grid>
            </Container>
                    </Box>
            <Footer />
   </>
  );
};

export default Explores;