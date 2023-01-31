const Express = require('express');
const app = new Express();
const router = require('./router/router');
const cors = require('cors');

const PORT = 3030;
const DB_URL = 'mongodb://localhost:27017/restaurants';

const mongoose = require('mongoose');
mongoose.connect(DB_URL).then(() => {
  console.log('Connected to DB 🍴');
});

app
  .use(cors())
  .use(Express.json())
  .use(router)
  .listen(PORT, () => {
    console.log(`Server listen on port ${PORT}🍴`);
  });
