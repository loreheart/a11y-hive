import * as fs from 'fs'
import * as path from 'path'
import * as csv from 'csv-parser'

const csvFilePath = path.resolve(__dirname, '../data/site-list.csv')
const jsonFilePath = path.resolve(__dirname, '../data/site-list.json')

const results: any[] = []

interface IData {
  [key: string]: string
}

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (data: IData) => results.push(data))
  .on('end', () => {
	fs.writeFileSync(jsonFilePath, JSON.stringify(results, null, 2))
	console.log('CSV file successfully processed and saved as JSON.')
  })