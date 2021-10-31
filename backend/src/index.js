const express = require("express")
const weatherRouter = require("./routes/weather")
const cors = require("cors")
const app = express()

app.use(
  cors()
);

app.get("/", (req, res) => {
    res.send("weather-app")
})

app.use("/weather", weatherRouter)

app.listen(process.env.PORT)