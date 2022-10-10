import '../Conection.js'
import Product from '../models/Product.js'
import User from '../models/User.js'

const deleteProduct = async (_username) => {
  return await User.remove({username: _username})
}

deleteProduct('inmanuel')
  .then(doc => console.log(doc))
  .catch(err => console.log(err))
