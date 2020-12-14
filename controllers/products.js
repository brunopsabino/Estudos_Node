const products = []

exports.getAddProduct = (req, res) => {
    res.render('add-product', {docTitle: 'Add Product', path: '/admin/add-product'})
}

exports.postAddProduct = (req, res) => {
    products.push({ title: req.body.title })
    res.redirect('/')
}

exports.getProducts = (req, res) => {
    //console.log(products)
    res.render('shop', {prods: products, docTitle: 'Shop', path: '/'}) //Renderizar um template. Arwuivos pug foram definidos como padrão. Pasta views, definida como pasta de templates
}