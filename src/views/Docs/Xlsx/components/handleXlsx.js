import XLSX from 'xlsx'

function handleXlsx(file) {
    let workbook = XLSX.read(file.target.result, { type: 'array' })
    var sheetNames = workbook.SheetNames;
    var worksheet = workbook.Sheets[sheetNames[0]];
    let json = XLSX.utils.sheet_to_json(worksheet);
    let csv = XLSX.utils.sheet_to_csv(worksheet)
    return {json,csv}
}
export default handleXlsx