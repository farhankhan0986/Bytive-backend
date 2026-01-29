const express = require("express")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/products", require("./routes/products"));
app.use("/api/price", require("./routes/pricing"));
app.use("/api/availability", require("./routes/availability"));

app.get("/", (req, res) => {
    res.send("Bytive backend API is running")
})

const PORT = 3000;

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(422).json({
    error: err.message || "Something went wrong"
  });
});


app.listen(PORT, () => {
    console.log(` http://localhost:${PORT}`)
})