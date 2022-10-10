import '../Conection.js'
import Product from '../models/Product.js'
import User from '../models/User.js'

const update = async (name) => {
  return await User.updateOne({username: name},{
    username: 'inmanuel',
    password: 'nueva contraseña',
    date: new Date()
  })
}

/* actualizara todas las busquedas a una nueva contraseña */
const updateMany = async (name, _password) => {
  return await User.updateMany({username: name},{
    password: _password,
    name: 'this is the name'
  })
}


/* actualizando user */
update('inmanuel', 'inmanuelNewPassword')
  .then(doc => console.log(doc))
  .catch(err => console.log(err))