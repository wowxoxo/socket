const express = require("express");

// App setup
const app = express();
const port = 4000;
const server = app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

// Static files
app.use(express.static("public"));
