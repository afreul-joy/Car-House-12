// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Product.css';

// const Product = ({ item }) => {
//     const { name, description, price, img, _id } = item;
//     return (
//         <div>
//             <div class="col-4 mb-5">
//                 <div class="card">
//                     <img src={img} class="card-image" alt="..." />
//                     <div class="card-body">
//                         <h5 class="card-title">{name}</h5>
//                         <p class="card-text">{description}</p>
//                         <h5 class="card-text">${price}</h5>
//                         <Link to={`/purchase/${_id}`}>
//                             <button type="button" class="btn btn-outline-dark m-2">Purchase</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Product;


import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
   const { name, description, price, img, _id } = item;
  return (
     <Grid item xs={4} sm={4} md={4}>
        
      <Card sx={{ minWidth: 275 }}>
          <CardMedia
            component="img"
            style={{ width: 'auto', height: '150px',margin:'0 auto'}}
            image={img}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ my:1 }} color="text.secondary">
         {description}
          </Typography>
        <Typography variant="body2" sx={{ my:1 }} className="text-primary" >
          Price : {price}
          </Typography>

          <Link to={`/purchase/${_id}`}>  <Button variant="contained" className=""  sx={{ my:1 }} >Purchase</Button> </Link>
          
      </CardContent>
        </Card>
       </Grid>
  );
};

export default Product;