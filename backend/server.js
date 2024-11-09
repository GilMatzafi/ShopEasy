import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connecDB from './config/db.js';
import products from './data/products.js';
const port = process.env.PORT || 5001;

connecDB(); 

const app = express();

app.get('/', (req, res) => {
  res.send('Api is running!');
} );      

app.get('/api/products', (req, res) => {
  res.json(products);
} );

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id)); // Convert req.params.id to a number
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
} );
