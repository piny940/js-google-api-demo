const checkRange = (range) => {
  if (!range.match(/[A-Z]+[0-9]+:[A-Z]+[0-9]+/)) {
    throw new Error("引数rangeの形式はA1:B2のようにしてください")
  }
}
const readSheet = async (range) => {
  checkRange(range)

  const ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/${range}`
  const response = await fetch(ENDPOINT + `?key=${process.env.GOOGLE_API_KEY}`)
  const json = await response.json()
  return json
}

module.exports = {
  readSheet,
}
