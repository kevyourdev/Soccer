import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

app.get('/', (req, res) =>
  res.send(`Our soccer application is running on port ${PORT}`)
);
mongoose.connect('mongodb://localhost/soccerDB');

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () =>
  console.log(`Your soccer app is running on PORT ${PORT}`)
);
