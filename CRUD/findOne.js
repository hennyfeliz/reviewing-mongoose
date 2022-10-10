import '../Conection.js'
import Product from '../models/Product.js'
import User from '../models/User.js'

const findOne = async (id) => {
  return await Product.findById(id)
}

const findAnother = async (name) => {
  return (await User.findOne({username: `${name}`}))
}

const findAnotherById = async (id) => {
  return (await User.findOne({_id: `${id}`}))
}

console.log('hola')
findOne('6344536a9a743407980981a0')
  .then(doc => console.log(doc))
  .catch(err => console.log(err))

findAnother('henny')
  .then(user => console.log(user))
  .catch(err => console.log(err))


findAnotherById('6344536a9a743407980981a0')
  .then(userid => console.log(userid))
  .catch(err => console.log(err))


  