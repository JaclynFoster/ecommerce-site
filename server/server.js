const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

app.listen(3450, () => {
    console.log(`Listening on port 3450`)
})