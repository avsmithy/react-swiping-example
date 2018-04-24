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
  constructor () {
    this._lastImageIndex = 0
  }

  _getRandomImage = () => {
    if (this._lastImageIndex === images.length) {
      this._lastImageIndex = 0
      return images[images.length - 1]
    }

    this._lastImageIndex++
    return images[this._lastImageIndex - 1]
  }

  next = () => {
    return {
      name: faker.fake('{{name.firstName}} {{name.lastName}}'),
      picture: this._getRandomImage()
    }
  }
}
