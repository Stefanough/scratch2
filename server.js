const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

const staticAssetsPath = path.resolve(__dirname);

// app.get('/', (req, res, next) => {
//   console.log('in first midware');
//   res.send('yooooooo');
// });

// app.use(express.static(path.join(__dirname, 'client')));

app.use(express.static(staticAssetsPath));
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
