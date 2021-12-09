import axios from 'axios'
import cheerio from 'cheerio'
import https from 'https'
import schedule from 'node-schedule'

export let events = []

const fetchData = async () => {
  try {
    events = []
    let hasError = false
    let page = 1
    while (!hasError) {
      // console.log('Fetching page ' + page)
      const { data } = await axios.get(`https://www.tam.museum/astronomy/forecast.php?p=${page}&lang=tw`, {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        })
      })
      const $ = cheerio.load(data)

      if ($('img[src="img/error.png"]').length > 0) {
        // console.log('end')
        hasError = true
        break
      }

      $('.post tbody tr').each((index, element) => {
        events.push({
          title: $(element).find('td').eq(1).text(),
          date: $(element).find('td').eq(1).text().match(/\d+\/\d+\/\d+/g)?.[0] || '',
          eye: $(element).find('[src*=V1.png]').length === 1,
          camera: $(element).find('[src*=V4.png]').length === 1,
          AstronomyGlasses: $(element).find('[src*=V3.png]').length === 1,
          telescope: $(element).find('[src*=V2.png]').length === 1,
          gooddate: $(element).find('td').eq(4).text().trim() || '-',
          link: 'https://www.tam.museum/astronomy/' + $(element).find('td').eq(1).find('a').eq(0).attr('href')
        })
      })
      page++
    }
    // console.log(events)
  } catch (error) {
    // console.log(error)
  }
}

fetchData()
schedule.scheduleJob('0 0 * * *', fetchData)
