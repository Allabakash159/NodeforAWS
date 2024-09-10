const schema = require('../modd/userschema')

const register = async(req, res)=>{
    const {firstname, lastname, email, password}= req.body
    const user = new schema({
     firstname: firstname,
     lastname: lastname,
     Email: email,
     Password: password
    })
    const response = await user.save()
    res.status(200).json({message: 'Response successfully'})
 }
 module.exports = register