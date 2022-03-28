const express = require('express');

const PORT = process.env.APP_PORT || 8080;

const app = express();

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
