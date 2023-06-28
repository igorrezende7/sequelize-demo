const jwt = require('jsonwebtoken')
require('dotenv').config();
const secret = process.env.SECRET

function verifyToken(req, res, next){
  const token = req.headers['token'];
  if(!token){
    return res.status(400).json('Não autenticado')
  }

  jwt.verify(token, secret, function(err, decoded){
    if(err){
      return res.status(400).json('Erro ao verificar token')
    }
    req.token = decoded.id;
    next();
  })

}

module.exports = verifyToken
