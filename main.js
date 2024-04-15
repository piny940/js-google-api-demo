require("dotenv").config()
const auth = require("./google/auth.js")
const sheet = require("./google/sheet.js")
const openai = require("./api/openai.js")
const deepl = require("./api/deepl.js")

const main = async () => {
  await auth.setup()

  // 演習1. スプシを読み込む
  // A1:C3のセルを読み込んでみましょう
  // 例↓
  // let cells = await sheet.readSheet("A1:B2") ← A1:B2のセルを読み込む
  // console.log(cells) ← 読み込んだ内容を表示する

  // ここを編集する










  // 演習2. スプシを編集する
  // D1:E3のセルに[["私は", "xxxです"], ["学部は", "xxxです"], ["趣味は", "xxxです"]]と書き込んでみましょう
  // 例↓
  // await sheet.updateSheet("A4:B6", [
  //   ["私は", "mikanです"],
  //   ["学部は", "工学部です"],
  //   ["趣味は", "プログラミングです"],
  // ])

  // ここを編集する











  // 演習3. 変数を使ってスプシを編集する
  // 変数に値を代入して、その変数を使ってスプシを編集してみましょう
  // 例↓
  // let message = "こんにちは"
  // await sheet.updateSheet("A6", [[message]])

  // ここを編集する












  // 演習4. ChatGPTを使ってみよう
  // ChatGPTを使ってみましょう
  // 例↓
  // let result = await openai.chat("教授に送るメールの文章を考えてください。")
  // console.log(result)

  // ここを編集する














  // 演習5. ChatGPTで英語の文章を作成してスプシのF1のセルに書き込んでみましょう
  // 例↓
  // let result5 = await openai.chat("日本語の文章を考えてください。")
  // await sheet.updateSheet("A8", [[result5]])

  // ここを編集する
  














  // 演習6. DeepLを使ってみよう
  // DeepLを使って英訳してみましょう
  // 例↓
  // let result6 = await deepl.translate("こんにちは", "EN")
  // console.log(result6)

  // ここを編集する
  
















  // 演習7. ChatGPTで英語の文章を作成してDeepLで日本語に翻訳してみましょう

  // ここを編集する
  

















  // 演習8. ChatGPTで英語の文章を作成してDeepLで日本語に翻訳してスプシに書き込んでみましょう

  // ここを編集する
  














}

main()
