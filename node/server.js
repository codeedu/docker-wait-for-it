const createApp = require("./index")
const PORT = 3000

const app = createApp()

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})