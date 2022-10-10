import './Conection.js'
import User from './models/User.js'

const oneFunction = async () => {
  const user = new User({
    username: 'henny',
    password: '123'
  })
  await user.save()
}

/* al ser una propiedad unica no se vuelve a introducir en la collecion... */
oneFunction()
  .then(e => console.log(e))
  .catch(err => console.log(err))
