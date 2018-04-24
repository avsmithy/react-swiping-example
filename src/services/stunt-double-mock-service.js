import faker from 'faker'

const images = [
  'http://www.placecage.com/400/600',
  'http://stevensegallery.com/400/600',
  'http://www.placecage.com/g/400/600',
  'http://fillmurray.com/400/600',
  'http://www.placecage.com/c/400/600',
  'http://fillmurray.com/g/400/600',
  'http://stevensegallery.com/g/400/600'
]

export default class StuntDoubleService {
  next = () => {
    if (images.length) {
      return {
        uid: faker.fake('{{random.uuid}}'),
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        picture: images.pop()
      }
    }

    return null
  }

  like = ({ name }) => {
    console.log('You liked:', name)
  }

  dislike = ({ name }) => {
    console.log('You hated:', name)
  }
}
