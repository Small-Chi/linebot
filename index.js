import 'dotenv/config'
import linebot from 'linebot'
import flex from './commands/flex.js'
import { events } from './tcatch.js'

// import fs from 'fs'
// 設定機器人
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

bot.on('message', async (event) => {
  const flexqq = {
    type: 'flex',
    altText: '活動訊息',
    contents: {
      type: 'carousel',
      contents: []
    }
  }
  if (event.message.type === 'text') {
    if (event.message.text.startsWith('選單')) {
      flex(event)
    } else if (event.message.text === '最新活動') {
      const filter = events.filter(event => event.date.length > 0)
      const five = filter.slice(0, 5)
      console.log(five)
      for (let j = 0; j < five.length; j++) {
        console.log(five[j].date)
        flexqq.contents.contents.push(
          {
            type: 'bubble',
            body: {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: '天空活動現象',
                  weight: 'bold',
                  color: '#1DB446',
                  size: 'md'
                },
                {
                  type: 'text',
                  text: five[j].title,
                  weight: 'bold',
                  size: 'xxl',
                  margin: 'sm',
                  wrap: true
                },
                {
                  type: 'separator',
                  margin: 'xxl'
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  margin: 'xxl',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'box',
                      layout: 'horizontal',
                      contents: [
                        {
                          type: 'text',
                          text: '預報日期',
                          size: 'md',
                          color: '#555555',
                          flex: 0
                        },
                        {
                          type: 'text',
                          text: five[j].date,
                          size: 'md',
                          color: '#111111',
                          align: 'end'
                        }
                      ]
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      contents: [
                        {
                          type: 'text',
                          text: '觀星期間',
                          size: 'md',
                          color: '#555555',
                          flex: 0
                        },
                        {
                          type: 'text',
                          text: five[j].gooddate,
                          wrap: true,
                          size: 'md',
                          color: '#111111',
                          align: 'end',
                          flex: 5,
                          margin: 'lg'
                        }
                      ]
                    },
                    {
                      type: 'separator',
                      margin: 'xxl'
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'xxl',
                      contents: [
                        {
                          type: 'text',
                          text: '觀星方式',
                          size: 'md',
                          color: '#555555'
                        }
                      ]
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      contents: []
                    }
                  ]
                },
                {
                  type: 'separator'
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: '前往詳細內容',
                        uri: five[j].link
                      }
                    }
                  ],
                  margin: 'none'
                },
                {
                  type: 'separator',
                  margin: 'none'
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  margin: 'md',
                  contents: [
                    {
                      type: 'text',
                      text: 'SOURCE',
                      size: 'xs',
                      color: '#aaaaaa',
                      flex: 0
                    },
                    {
                      type: 'text',
                      text: '#網路天文館',
                      color: '#aaaaaa',
                      size: 'xs',
                      align: 'end'
                    }
                  ]
                }
              ]
            },
            styles: {
              footer: {
                separator: true
              }
            }
          }
        )
        if (five[j].eye === true) {
          flexqq.contents.contents[j].body.contents[3].contents[4].contents.push(
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url: 'https://raw.githubusercontent.com/Small-Chi/ClassHomework/main/lineimage/V0001.png',
                  size: 'xs'
                }
              ]
            })
        }
        if (five[j].camera === true) {
          flexqq.contents.contents[j].body.contents[3].contents[4].contents.push(
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url: 'https://raw.githubusercontent.com/Small-Chi/ClassHomework/main/lineimage/V0002.png',
                  size: 'xs'
                }
              ]
            })
        }
        if (five[j].telescope === true) {
          flexqq.contents.contents[j].body.contents[3].contents[4].contents.push(
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url: 'https://raw.githubusercontent.com/Small-Chi/ClassHomework/main/lineimage/V0003.png',
                  size: 'xs'
                }
              ]
            })
        }
        if (five[j].AstronomyGlasses === true) {
          flexqq.contents.contents[j].body.contents[3].contents[4].contents.push(
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url: 'https://raw.githubusercontent.com/Small-Chi/ClassHomework/main/lineimage/V0004.png',
                  size: 'xs'
                }
              ]
            })
        }
      }
      event.reply(flexqq)
      console.log(five)
    } else {
      event.reply('請手動輸入文字 " 選單 " 喚出「星曆選單」工具，或使用手機版下方選單「所有資訊」上的功能')
    }
  }
})

bot.on('postback', async (event) => {
  // console.log(event)
  // console.log(event.params.date)
  // type: 'postback',
  // postback: { data: 'hello', params: { date: '2021-11-23' } },
  // timestamp: 1637637025097,
  const correct = events.filter(e => {
    return e.date === event.postback.params.date.replace(/-/g, '/').padStart(2, '0')
  })
  // fs.writeFileSync('./data.json', JSON.stringify(correct, null, 2))
  const flexq = {
    type: 'flex',
    altText: '活動訊息',
    contents: {
      type: 'carousel',
      contents: []
    }
  }
  if (correct.length > 0) {
    for (let i = 0; i < correct.length; i++) {
      flexq.contents.contents.push(
        {
          type: 'bubble',
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '天空活動現象',
                weight: 'bold',
                color: '#1DB446',
                size: 'md'
              },
              {
                type: 'text',
                text: correct[i].title,
                weight: 'bold',
                size: 'xxl',
                margin: 'sm',
                wrap: true
              },
              {
                type: 'separator',
                margin: 'xxl'
              },
              {
                type: 'box',
                layout: 'vertical',
                margin: 'xxl',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: '預報日期',
                        size: 'md',
                        color: '#555555',
                        flex: 0
                      },
                      {
                        type: 'text',
                        text: correct[i].date,
                        size: 'md',
                        color: '#111111',
                        align: 'end'
                      }
                    ]
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: '觀星期間',
                        size: 'md',
                        color: '#555555',
                        flex: 0
                      },
                      {
                        type: 'text',
                        text: correct[i].gooddate,
                        wrap: true,
                        size: 'md',
                        color: '#111111',
                        align: 'end',
                        flex: 5,
                        margin: 'lg'
                      }
                    ]
                  },
                  {
                    type: 'separator',
                    margin: 'xxl'
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    margin: 'xxl',
                    contents: [
                      {
                        type: 'text',
                        text: '觀星方式',
                        size: 'md',
                        color: '#555555'
                      }
                    ]
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: []
                  }
                ]
              },
              {
                type: 'separator'
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'button',
                    action: {
                      type: 'uri',
                      label: '前往詳細內容',
                      uri: correct[i].link
                    }
                  }
                ],
                margin: 'none'
              },
              {
                type: 'separator',
                margin: 'none'
              },
              {
                type: 'box',
                layout: 'horizontal',
                margin: 'md',
                contents: [
                  {
                    type: 'text',
                    text: 'SOURCE',
                    size: 'xs',
                    color: '#aaaaaa',
                    flex: 0
                  },
                  {
                    type: 'text',
                    text: '#網路天文館',
                    color: '#aaaaaa',
                    size: 'xs',
                    align: 'end'
                  }
                ]
              }
            ]
          },
          styles: {
            footer: {
              separator: true
            }
          }
        }
      )
      if (correct[i].eye === true) {
        flexq.contents.contents[i].body.contents[3].contents[4].contents.push(
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'image',
                url: 'https://raw.githubusercontent.com/Small-Chi/ClassHomework/main/lineimage/V0001.png',
                size: 'xs'
              }
            ]
          })
      }
      if (correct[i].camera === true) {
        flexq.contents.contents[i].body.contents[3].contents[4].contents.push(
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'image',
                url: 'https://raw.githubusercontent.com/Small-Chi/ClassHomework/main/lineimage/V0002.png',
                size: 'xs'
              }
            ]
          })
      }
      if (correct[i].telescope === true) {
        flexq.contents.contents[i].body.contents[3].contents[4].contents.push(
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'image',
                url: 'https://raw.githubusercontent.com/Small-Chi/ClassHomework/main/lineimage/V0003.png',
                size: 'xs'
              }
            ]
          })
      }
      if (correct[i].AstronomyGlasses === true) {
        flexq.contents.contents[i].body.contents[3].contents[4].contents.push(
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'image',
                url: 'https://raw.githubusercontent.com/Small-Chi/ClassHomework/main/lineimage/V0004.png',
                size: 'xs'
              }
            ]
          })
      }
    }
    // console.log(correct)
    event.reply(flexq)
  }
  if (correct.length === 0) {
    event.reply('這天還沒有活動喔!')
  }
  // console.log(correct)
})


