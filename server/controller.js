module.exports = {
    register: async (req, res)=> {
       let { username, password } = req.body;
       const db = req.app.get('db');
        let user = await db.find_user([username]);
        if (user[0]) {
            return res.status(200).send({
                loggedIn: false, message: 'username already in use'
            })
        } else {
            let createdUser = await db.create_user([username, password]);
            req.session.user = { username: createdUser[0].username, id: createdUser[0].id }
            res.status(200).send({ loggedIn: true, message: 'Register successful'})
        }
    }  
}