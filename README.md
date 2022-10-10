# reviewing mongoose
simple nodejs crud with non-relational databases, with mongoose

## SCHEMAS

Schemas are simple, they mark a way to work with mongo data...

User schema:
  `username: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  date: {
    type: Date,
    default: new Date()
  },
  name: String`

Product schema:
  `name: String,
  description: String,
  price: {
    type: Number,
    default: 0.00
  }`

## Mongo terminal commands used

@ FOR USER SCHEMA
* db.users.find()
* db.users.find().pretty()
* db.users.find({username: 'someusername'}).pretty()
* db.users.update({username: 'someusername'},{data to change})
* db.users.remove({username: 'someusertname'})

@ FOR PRODUCTS SCHEMA
* db.products.find()
* db.products.find().pretty()
* db.products.find({name: 'someproductname'}).pretty()
* db.products.update({name: 'someproductname'},{data to change})
* db.users.remove({name: 'someproductname'})

## To Run

* node App.js
* node ./CRUD/create.js
* node ./CRUD/delete.js
* node ./CRUD/findOne.js
* node ./CRUD/update.js
* node ./CRUD/list.js