const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

// app.get('/', (req, res, next) => {
//   console.log('in first midware');
//   res.send('yooooooo');
// });

app.use(express.static(path.join(__dirname, 'client')));
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
