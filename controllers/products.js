const Product = require('../models/product')

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', {docTitle: 'Add Product', path: '/admin/add-product'})
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title)
    product.save();
    res.redirect('/')
}

exports.getProducts = (req, res) => {
    const products = Product.fetchAll()
    res.render('shop/product-list', {prods: products, docTitle: 'Shop', path: '/'}) 
}