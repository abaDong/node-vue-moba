const express = require('express')
const app = express()
const port = 3000

app.set('secret', 'abpswwww15633216181tsa1df6a')

app.use(require("cors")())
app.use(express.json())

app.use('/uploads', express.static(__dirname + '/uploads'))

require("./plugins/db")(app)
require("./routes/admin")(app)
require("./routes/web")(app)

app.listen(port, () => console.log("done"))