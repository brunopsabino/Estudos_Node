const Product = require('../models/product')

exports.getProducts = (req, res) => {
    const products = Product.fetchAll()
    res.render('shop/product-list', {
        prods: products, 
        docTitle: 'All Products',
        path: '/products'}) 
}

exports.getProductPage = (req, res) => {
    res.render('shop/product')
}

exports.getIndex = (req, res) => {
    const products = Product.fetchAll()
    res.render('shop/index', {
        prods: products,
        docTitle: 'Shop', 
        path: '/'})
}

exports.getCart = (req, res) => {
    res.render('shop/cart', {
        docTitle: 'All Your Cart', 
        path: '/cart'})
}

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        docTitle: 'Checkout', 
        path: '/checkout'
    })
}