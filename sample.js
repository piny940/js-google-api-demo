require("dotenv").config()
const auth = require("./google/auth.js")
const sheet = require("./google/sheet.js")
const openai = require("./api/openai.js")
const deepl = require("./api/deepl.js")

const updateStatus = (status) => {
  sheet.updateSheet("D4:E4", [["Status", status]])
}

const main = async () => {
  await auth.setup()
  const message =
    'Output ten Japanese sentences. The format is {"sentences": ["sentence1", "sentence2", ...]}'
  const res = await openai.chat(message)
  const resJson = JSON.parse(res)
  const sentences = resJson.sentences

  updateStatus("文章生成中...")

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i]
    await sheet.updateSheet(`A${i + 1}`, [[sentence]])

    await new Promise((resolve) => {
      setTimeout(resolve, 100)
    })
  }

  updateStatus("翻訳中...")

  const translated = await deepl.translate(sentences, "EN")

  for (let i = 0; i < translated.length; i++) {
    const sentence = translated[i]
    await sheet.updateSheet(`B${i + 1}`, [[sentence]])

    await new Promise((resolve) => {
      setTimeout(resolve, 100)
    })
  }

  updateStatus("完了")
}

main()
