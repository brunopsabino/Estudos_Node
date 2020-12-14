const Product = require('../models/product')

exports.getAddProduct = (req, res) => {
    res.render('add-product', {docTitle: 'Add Product', path: '/admin/add-product'})
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title)
    product.save();
    res.redirect('/')
}

exports.getProducts = (req, res) => {
    const products = Product.fetchAll()
    //console.log(products)
    res.render('shop', {prods: products, docTitle: 'Shop', path: '/'}) //Renderizar um template. Arwuivos pug foram definidos como padrão. Pasta views, definida como pasta de templates
}