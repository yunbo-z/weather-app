//object property shorthand

const name = 'taotao'
const userAge = 23

const user = {
    name,//can use a shorthand syntax
    age: userAge,
}

console.log(user)

//object destructuring

const product = {
    label: 'notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock
const {label:productLabel, stock, rating=5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)

//{label, stock} = {} this gives defaut value of the object, 
const transacation = ( type, { label = 4, stock =3 } = {}) => {
    console.log(type, label, stock)
}
transacation('order', product)