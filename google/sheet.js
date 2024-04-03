const readSheet = async (range) => {
  const ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/${range}`
  const response = await fetch(ENDPOINT + `?key=${process.env.GOOGLE_API_KEY}`)
  const json = await response.json()
  return json
}

module.exports = {
  readSheet,
}
