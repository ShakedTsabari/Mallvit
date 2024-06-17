const express = require('express');
const bodyParser = require('body-parser');
const storeRoutes = require('./routes/storeRoutes');

const app = express();
const port = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use('/stores', storeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
