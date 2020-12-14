exports.get404 = (req, res) =>{
    res.status(404).render('page-not-found', {docTitle: 'Page not Found', path: "not_found"})
}