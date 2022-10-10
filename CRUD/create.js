import '../Conection.js'
import Product from '../models/Product.js'
import User from '../models/User.js'

const createUser = async (user) => {
  const newUser = new User({
    username: 'farah',
    password: 'fefe',
    date: new Date()
  })

  await newUser.save()
  return newUser
}

const createAnotherUser = async (oneUser) => {
  const newUser = new User(oneUser)

  await newUser.save()
  return newUser
}

/* creating a new user */
/* createUser()
  .then(doc => console.log(doc))
  .catch(err => console.log(err)) */

/* creating another user */
createAnotherUser({
  username: 'inmanuel',
  password: 'inma',
  date: new Date()
})
  .then(doc => console.log(doc))
  .catch(err => console.log(err))


