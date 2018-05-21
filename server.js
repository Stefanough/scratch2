const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

app.use(express.static(__dirname));
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
