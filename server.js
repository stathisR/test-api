const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const ingredients = [
  {
    "id": "1",
    "item": "Bacon"
  },
  {
    "id": "2",
    "item": "Eggs"
  },
  {
    "id": "3",
    "item": "Milk"
  },
  {
    "id": "4",
    "item": "Butter"
  }
];

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/ingredients', (req, res) =>{
  res.send(ingredients);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});