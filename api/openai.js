const chat = async (message) => {
  if (typeof message !== "string") {
    throw new Error("Message must be a string.")
  }
  const ENDPOINT = "https://api.openai.com/v1/chat/completions"
  const data = JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: message,
      },
    ],
  })
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: data,
  })
  const json = await res.json()
  return json.choices[0].message.content
}

module.exports = {
  chat,
}
