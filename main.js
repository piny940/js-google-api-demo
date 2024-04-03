require("dotenv").config()
const auth = require("./google/auth.js")
const sheet = require("./google/sheet.js")

const main = async () => {
  await auth.setup()
  console.log(await sheet.readSheet("C5:D7"))
}

main()
