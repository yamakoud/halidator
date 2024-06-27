import express from 'express';
import bodyParser from 'body-parser';
import Halidator from './../client/halidator';


const app = express();
app.use(bodyParser.text({ type: 'text/html' }));

app.post('/validate', (req, res) => {
  const htmlContent: string = req.body;
  // const results: string[] = new Halidator(htmlConten);
  const results: string[] = [];
  res.json({ errors: results });
});

app.listen(3000, () => {
  console.log('API server running on port 3000');
});
