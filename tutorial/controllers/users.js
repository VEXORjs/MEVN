module.exports.controller = (app) => {
    app.get('./users' , (req, res) => {
        res.render('users', {title: 'Users', description: 'this is the description of all the users'});
    })
}