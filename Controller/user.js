const User = require('../Model/user');

exports.getUsers = (req,res,next) => {
    User.findAll()
    .then((users) => {
        res.json(users);
    })
    .catch(err => console.log(err))

}

exports.addUser = (req,res,next) => {
    const name = req.body.name;
    const number = req.body.number;
    const email = req.body.email;

    User.create({
        name:name,
        number:number,
        email:email
    })
    .then((data) =>{
        res.json(data);
    })
}

exports.deleteUser = (req,res,next) =>{
    const userid = req.params.userid;
    User.findByPk(userid)
    .then((user) =>{
        user.destroy();
        res.status(200).json(user)
    })
}