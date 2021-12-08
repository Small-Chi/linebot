import flex from '../template/flex.js'

export default async (event) => {
  flex.altText = '哈囉'
  event.reply(flex)
}
