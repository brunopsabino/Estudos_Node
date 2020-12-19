
const Product = require('../models/product')

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', {docTitle: 'Add Product', path: '/admin/add-product'})
}

exports.postAddProduct = (req, res) => {
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const description = req.body.description
    const price = req.body.price
    
    const product = new Product(title, imageUrl, description, price)
    product.save();
    res.redirect('/')
}

exports.getProducts = (req, res) => {
    const products = Product.fetchAll()
    res.render('admin/products', {
        prods: products,
        docTitle: 'Admin Products', 
        path: '/admin/products'})
}