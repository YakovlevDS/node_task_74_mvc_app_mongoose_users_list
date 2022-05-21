const User = require("../models/user.js");
 
exports.addUser = (req, res)=>res.render("create.hbs");

exports.getUsers = (req, res)=>{
    User.find({}, (err, allUsers)=>{
  
        if(err) {
            console.log(err);
            return res.sendStatus(400);
        }
        res.render("users.hbs", {
            users: allUsers
        });
    });
};
exports.postUser= (req, res)=>{
    if(!request.body) return res.sendStatus(400);
    const userName = req.body.name;
    const userAge = req.body.age;
    const user = new User({name: userName, age: userAge});
     
    user.save(err=>{
        if(err) return console.log(err);
        res.redirect("/users");
    });
};