import express from "express";
import router from "./routes/route.js";
import bodyParser from "body-parser";
import cors from 'cors';
import connection from "./database/db.js";
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use('/', router);


connection.then(() => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  }).catch((error) => {
    console.error('Error while connecting to the database', error.message);
  });

