exports.get404Page = (req, res, next) => {
    res.status(404).render('404/PageNotFound', { docTitle: 'Page Not Found',path:'/404'});
};