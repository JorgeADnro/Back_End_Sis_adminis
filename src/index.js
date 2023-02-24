
const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRouters = require('./routes/users');
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");



app.use(cors());
app.use(express.json());
app.use('/api/', userRouters);



mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlass'))
    .catch((error) => console.error(error));


const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRouters = require('./routes/users');
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use('/api/', userRouters);


mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlass'))
    .catch((error) => console.error(error));

>>>>>>> 1771448fb7b2fe246bc00b2de83c96ca6d77db05
app.listen(port, () => console.log('Server listening on port',port));
