const express = require("express")
const weatherRouter = require("./components/weather/weather.js")
const cors = require("cors")
const app = express()

app.use(
  cors()
);

app.get("/", (req, res) => {
    res.send("weather-app")
})

app.use("/weather", weatherRouter)

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))