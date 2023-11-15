const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'dogs',
    id: 1,
  },
  {
    category_name: 'cats',
    id: 2,
  },
  {
    category_name: 'elephant',
    id: 3,
  },
  {
    category_name: 'lion',
    id: 4,
  },
  {
    category_name: 'tiger',
    id: 5,
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
