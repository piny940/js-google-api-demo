const translate = async (text, target) => {
  const ENDPOINT = "https://api-free.deepl.com/v2/translate"
  const data = JSON.stringify({
    text: typeof text === "string" ? [text] : text,
    target_lang: target,
  })
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
    },
    body: data,
  })
  const json = await res.json()

  if (typeof text === "string") {
    return json.translations[0].text
  } else {
    return json.translations.map((t) => t.text)
  }
}

module.exports = {
  translate,
}
