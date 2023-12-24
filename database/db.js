import mongoose from 'mongoose';

const URL = "mongodb://127.0.0.1:27017/job-portal";

const connection = mongoose
  .connect(URL)
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.log('Error while connecting to the database', error.message);
  });

export default connection;
