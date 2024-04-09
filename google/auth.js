const { google } = require("googleapis")

let auth = null

const setup = async () => {
  const credentials = JSON.parse(process.env.GOOGLE_JSON)
  credentials.private_key = credentials.private_key.replace(/\\n/g, "\n")
  auth = await google.auth.getClient({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })
}
const getAuth = () => auth

module.exports = {
  auth,
  setup,
  getAuth,
}
