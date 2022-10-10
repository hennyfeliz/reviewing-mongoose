import './Conection'
import Product from './models/Product'



const main = async () => {
  const newProduct = new Product({
    name: 'teclado',
    description: 'coursair r60 rgb gaming',
    price: 140.20
  })

  await newProduct.save()
  console.log(newProduct)
}

main()

