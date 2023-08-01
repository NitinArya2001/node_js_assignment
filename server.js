import express  from "express";
import { APP_PORT } from "./config";
import sumArray from './dataManipulation';
import fs from 'fs';


const app = express();

app.get('/tasks', (req, res) => {
    const numbersArray = [1, 2, 3, 4, 5]; // Sample input array of integers
    try {
      const result = sumArray(numbersArray);
      const task1Result = 'Hello, World!';
      const task2Result = `Sum: ${result}`;
  
      // Asynchronously read the data.txt file and count the words
      fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          res.status(500).send('Error reading file.');
        } else {
          const wordCount = data.split(/\s+/).length;
          res.json({ task1Result, task2Result, wordCount });
        }
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  // Serve the index.html file when visiting the root URL
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/config/index.html');
  });
  
app.listen(APP_PORT, () => console.log(`Server is running on http://localhost:${APP_PORT}`))