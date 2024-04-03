require("dotenv").config()
const sheet = require("./google/sheet.js")

const main = async () => {
  console.log(await sheet.readSheet("C5:D7"))
}

main()
