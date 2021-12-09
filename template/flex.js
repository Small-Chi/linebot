export default {
  type: 'flex',
  altText: '123456',
  contents: {
    type: 'bubble',
    hero: {
      type: 'image',
      url: 'https://raw.githubusercontent.com/Small-Chi/ClassHomework/main/lineimage/%E9%81%B8%E5%96%AE%E5%B0%81%E9%9D%A2-OK.png',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'https://www.tam.museum/astronomy/index.php?lang=tw'
      }
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '找星星🌔星曆選單',
          weight: 'bold',
          size: 'xl'
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '➤',
                  color: '#aaaaaa',
                  size: 'md',
                  flex: 0
                },
                {
                  type: 'text',
                  text: '點選「指定日期」查詢星曆，或選擇「最新活動」快速產生 6 筆最新消息。',
                  wrap: true,
                  color: '#666666',
                  size: 'md',
                  flex: 5,
                  align: 'start'
                }
              ]
            }
          ]
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'datetimepicker',
            label: '指定日期',
            data: 'hello',
            mode: 'date',
            min: '2016-12-31'
            // max: '2022-12-31'
            // max: new Date()
          }
        },
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'message',
            label: '最新活動',
            text: '最新活動'
          }
        },
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: '全部列表',
            uri: 'https://www.tam.museum/astronomy/forecast.php?lang=twhttps://linecorp.com'
          }
        },
        {
          type: 'spacer',
          size: 'sm'
        }
      ],
      flex: 0
    }
  }
}
