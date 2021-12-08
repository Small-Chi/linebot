import axios from 'axios'
import schedule from 'node-schedule'

let data = []

const getData = () => {
  axios.get('https://www.tam.museum/astronomy/forecast.php?lang=tw')
    .then(response => {
      data = response.data
    })
}

getData()
schedule.scheduleJob('0 0 * * *', getData)
