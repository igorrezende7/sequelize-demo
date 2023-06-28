const User = require('../Models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const secret = process.env.SECRET
const bcrypt = require('bcrypt')

class UserController{
  async create(req, res){
    const {name, email, password} = req.body;

    try {
      const hash = bcrypt.hashSync(password, 10)
      const user = await User.create({
        name:name,
        email:email,
        password:hash
      })
      await user.save()
      var id = user.id;
      const token = jwt.sign({id},secret, {expiresIn:1000})
      return res.status(200).json({auth:true, token:token})
    } catch (error) {
      res.status(400).json(error)
    }
  }


  async login(req,res){
    const {email, password} = req.body;

    try {

      const user = await User.findOne({where:{
        email:email
      }})
      const compare = bcrypt.compareSync(password, user.password);

      if(!compare){
        return res.status(400).json('Senha inválida')
      }
      const id = user.id
      const token = jwt.sign({id}, secret, {expiresIn:1000})
      res.status(200).json({auth:true, token:token})

    } catch (error) {
      res.status(400).json(error)
    }
  }



  async getInfo(req, res){


    try {
      const user = await User.findByPk(req.token)
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json(error)
    }
  }




}


module.exports = new UserController;
