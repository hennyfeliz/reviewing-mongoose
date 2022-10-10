import '../Conection.js'
import Product from '../models/Product.js'

const oneFunction = async () => {
  const Products = Product.find()
  console.log('listando productos')
  console.log(Products)
}


oneFunction()








