const express = require("express");
const marked = require("marked");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.post("/convert", (req, res) => {
  console.log(req.body);
  const markdown = req.body.markdown;
  const html = marked.parse(markdown);
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
