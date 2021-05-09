
module.exports = ({
  id,
  image,
  shelterName,
  sexName,
  link,
}) => {
  return {
    'type': 'flex',
    'altText': '您已抽了靈魂貓貓！',
    'contents': {
      'type': 'bubble',
      'header': {
        'type': 'box',
        'layout': 'horizontal',
        'contents': [
          {
            'type': 'text',
            'text': shelterName,
            'weight': 'bold',
            'size': 'sm',
            'color': '#AAAAAA',
            'contents': [],
          },
        ],
      },
      'hero': {
        'type': 'image',
        'url': image,
        'size': 'full',
        'aspectRatio': '20:20',
        'aspectMode': 'cover',
        'action': {
          'type': 'uri',
          'label': '愛了',
          'uri': link,
        },
      },
      'footer': {
        'type': 'box',
        'layout': 'horizontal',
        'contents': [
          {
            'type': 'button',
            'action': {
              'type': 'message',
              'label': '下一個',
              'text': '抽',
            },
            'height': 'sm',
            'style': 'primary',
          },
          {
            'type': 'text',
            'text': sexName,
            'align': 'center',
            'gravity': 'center',
            'contents': [],
          },
          {
            'type': 'button',
            'action': {
              'type': 'uri',
              'label': '愛了',
              'uri': link,
            },
            'color': '#C94B42FF',
            'height': 'sm',
            'style': 'primary',
          },
        ],
      },
    },
  }
}
