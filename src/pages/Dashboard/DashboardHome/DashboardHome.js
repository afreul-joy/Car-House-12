import * as React from 'react';
import { Grid } from '@mui/material';
import Review from '../Review/Review';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Review></Review>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;