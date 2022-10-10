//Curso mongodb fazt
import mongoose from 'mongoose'
const db = mongoose.connection;/* parseando la variable de conexion de mongoose */

/* url para conexion con mongodb */
const url = 'mongodb://localhost:27017/webstore'

/* confirmaciones para mongoose */
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
/*   useCreateIndex: true */
})

/* mensaje de confirmacion de connecion */
db.on('open', _ => {
  console.log('database is connected')
})

/* manejo de errores */
db.on('error', err => {
  console.log(err)
})


