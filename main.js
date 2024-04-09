require("dotenv").config()
const auth = require("./google/auth.js")
const sheet = require("./google/sheet.js")
const openai = require("./api/openai.js")

const main = async () => {
  await auth.setup()
  const message =
    'Output ten Japanese sentences. The format is {"sentences": ["sentence1", "sentence2", ...]}'
  const res = await openai.chat(message)
  console.log(res)
  const resJson = JSON.parse(res)
  const sentences = resJson.sentences

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i]
    await sheet.updateSheet(`A${i + 1}`, [[sentence]])

    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
  }
}

main()
