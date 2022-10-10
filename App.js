import './Conection.js'
import Product from './models/Product.js'

const newProduct = new Product({
  name: 'laptop',
  description: 'an easy to use laptop, great!',
  price: 4300.00
})

const anotherProduct = async () => {
  const newProduct = new Product({
    name: 'laptop',
    description: 'an easy to use laptop, great!',
    price: 4300.00
  })

  const productSave = await newProduct.save()
  return productSave
}

/* crear producto */
/* const creatingNewProduct = newProduct.save((err, document) => {
  if(err) console.log(err)
  console.log(document)
}) */

/* manejando la promesa */
anotherProduct()
  .then(productSave => console.log(productSave))
  .catch(err => console.log(err))

console.log(newProduct)



