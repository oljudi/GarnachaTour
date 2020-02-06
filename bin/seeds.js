require('dotenv').config();
const mongoose = require('mongoose')
const Dishes = require('../models/Dishes')

const dataDishes = [
    {
      name: "Taco de Pastor",
      img: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/07/como-cocinar-carne-al-pastor-ya-preparada.jpg',
      description: 'Al pastor, also known as tacos al pastor, is a taco made with spit-grilled pork. Based on the lamb shawarma brought by Lebanese immigrants to Mexico, al pastor features a flavor palate that combines traditional Middle Eastern spices with those indigenous to central Mexico. It is a popular street food that has spread to the United States. In some places of northern Mexico, as in Baja California, it is known as taco de adobada. A similar dish from Puebla with different spices is tacos árabes',
      ingredients: ['Tortilla', 'Pineapple', 'Onion', 'Beef', 'Coriander'],
      spicyLevel: 'hot'
    }
  ]

  mongoose
  .connect(process.env.DB, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Dishes.create(dataDishes).then(res => console.log('Dishes on DB'))
  })
  .catch(err => {
    console.error('Error populating Mongo:', err)
  }); 