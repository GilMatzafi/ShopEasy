import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connecDB from './config/db.js';
import ProductRoutes from './routes/productRoutes.js';

const port = process.env.PORT || 5001;

connecDB(); 

const app = express();

app.get('/', (req, res) => {
  res.send('Api is running!');
} );      

app.use('/api/products', ProductRoutes);




app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);