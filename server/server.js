const express = require("express");
const app = express();

const path = require("path");

const PORT = 3000;

app.use("/dist", express.static(path.resolve(__dirname, "dist")));

app.get("/Erick_Melendez_Resume", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/Erick_Melendez_Resume.pdf"));
});

if (process.env.NODE_ENV === "production") {
  app.use("/", (req, res) =>
    res.sendFile(path.resolve(__dirname, "index.html"))
  );
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
