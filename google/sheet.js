const { google } = require("googleapis")
const { getAuth } = require("./auth")

const checkRange = (range) => {
  if (!range.match(/[A-Z]+[0-9]+(:[A-Z]+[0-9]+)?/)) {
    throw new Error("引数rangeの形式はA1やA1:B2のようにしてください")
  }
}
const readSheet = async (range, spreadsheetId = undefined) => {
  spreadsheetId ||= process.env.SPREADSHEET_ID

  const auth = getAuth()
  const client = google.sheets({ auth, version: "v4" })

  checkRange(range)

  const response = await client.spreadsheets.values.get({
    spreadsheetId,
    range,
  })
  const json = response.data
  return json.values
}

const updateSheet = async (range, values, spreadsheetId = undefined) => {
  spreadsheetId ||= process.env.SPREADSHEET_ID
  const auth = getAuth()
  const client = google.sheets({ auth, version: "v4" })

  checkRange(range)
  await client.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      range,
      values,
    },
  })
}

module.exports = {
  readSheet,
  updateSheet,
}
