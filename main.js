require("dotenv").config()
const auth = require("./google/auth.js")
const sheet = require("./google/sheet.js")
const openai = require("./api/openai.js")
const deepl = require("./api/deepl.js")

const main = async () => {
  await auth.setup()

  // 演習1. スプシを読み込む
  // A1:B3のセルを読み込んでみましょう
  // 例↓
  // let cells = await sheet.readSheet("A1:B2") ← A1:B2のセルを読み込む
  // console.log(cells) ← 読み込んだ内容を表示する

  // ここを編集する
}

main()
