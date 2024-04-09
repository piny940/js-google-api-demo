require("dotenv").config()
const auth = require("./google/auth.js")
const sheet = require("./google/sheet.js")

const main = async () => {
  await auth.setup()
  console.log(await sheet.readSheet("C5:D7"))
  await sheet.updateSheet("C8:D9", [["Hello", "World"], ["Welcome", "KMC"]])
}

main()
