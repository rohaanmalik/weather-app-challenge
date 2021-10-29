const express = require("express")
const weatherRouter = require("./routes/weather")

const app = express()
app.get("/", (req, res) => {
    res.send("weather-app")
})

app.use("/weather", weatherRouter)


app.listen(process.env.PORT)