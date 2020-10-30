const fs = require('fs')

// const path = 'cats.txt'
// const data = 'Luna.Bella.Lily.Lucy.Kitty.Callie.Nala.Zoe.'

const path = 'cats.jpg'
const data = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAfOSURBVFiFrZd7UJTXGcZ'
const dataBuffer = Buffer.from(data, 'base64')

fs.writeFile(path, dataBuffer, err => {
    if (err) throw err

    console.log('write data successfully!')
})