
const mongoose = require('mongoose');
mongoose.pluralize(null)

const mongoURI ='';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    // Define Mongoose model for 'food_items'
    const food_itemsSchema = mongoose.Schema({
      CategoryName: String,
      name: String,
      img: String,
      options: [String],
      description: String
    });
    const food_items = mongoose.model('food_items', food_itemsSchema);

    // Define Mongoose model for 'food_Category'
    const food_CategorySchema = mongoose.Schema({
      Category: String
    });
    const food_category = mongoose.model('food_category', food_CategorySchema);

    // Fetch data from 'food_items' and 'food_Category' collections
    const fetched_data_items = await food_items.find({}).lean();
    const fetched_food_category = await food_category.find({}).lean();


    // Log the fetched data
    global.food_items=fetched_data_items;
    global.food_category=fetched_food_category; 

  } catch (error) {
    console.error('Error connecting to MongoDB or fetching data:', error.message);
  } 
};

module.exports = mongoDB;



