const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Serve geetest.html at the root path
app.get("/", (req, res) => {
  console.log("들어왔따.");
  res.sendFile(path.join(__dirname, "public", "geetest.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
