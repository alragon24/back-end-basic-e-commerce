const { Product } = require('../models');

const productData = [
  {
    product_name: 'dog',
    price: 145.99,
    stock: 16,
    category_id: 1,
  },
  {
    product_name: 'cat',
    price: 90.00,
    stock: 2,
    category_id: 5,
  },
  {
    product_name: 'elephant',
    price: 245.99,
    stock: 22,
    category_id: 4,
  },
  {
    product_name: 'tiger',
    price: 325.99,
    stock: 6,
    category_id: 3,
  },
  {
    product_name: 'lion',
    price: 345.99,
    stock: 2,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
