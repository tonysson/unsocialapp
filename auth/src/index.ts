import express from 'express';

const app = express();

app.get('*', (req, res) => {
  res.send('hey');
});

app.listen(8000, () => {
  console.log('listening on port 8000');
});
