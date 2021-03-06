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
          text: 'ćžććđććé¸ĺŽ',
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
                  text: 'â¤',
                  color: '#aaaaaa',
                  size: 'md',
                  flex: 0
                },
                {
                  type: 'text',
                  text: 'éťé¸ăćĺŽćĽćăćĽčŠ˘ććďźćé¸ćăćć°ć´ťĺăĺżŤéç˘ç 5 ç­ćć°ćśćŻă',
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
            label: 'ćĺŽćĽć',
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
            label: 'ćć°ć´ťĺ',
            text: 'ćć°ć´ťĺ'
          }
        },
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: 'ĺ¨é¨ĺčĄ¨',
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
