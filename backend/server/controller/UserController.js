const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { user } = require('../database/index'); 
const secret = 'azeertra13215658'

function login(req,res){
  const{email,password}= req.params
  user.findOne({where:{email:email}})
  .then(response =>{
    console.log(response);
    bcrypt.compare(password,response.dataValues.password).then(data=>{
      if(data){
        const token = jwt.sign({ id: response.dataValues.id,role:response.dataValues.role }, secret );
      res.status(201).json({ user: response.dataValues, token });

      }else{
        res.status(500).json("password not found")
      }
    })
  })
}
 
function createUser(req, res) {
  const { username, email, password,role } = req.body;

  bcrypt.hash(password, 10)
    .then(hashedPassword => {
      return user.create({ username, email, password: hashedPassword , role});
    })
    .then(newUser => {
      
      const token = jwt.sign({ id: newUser.id }, secret );
      res.status(201).json({ user: newUser, token,role });
    })
    .catch(error => {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}


function getAllUsers(req, res) { 
  user.findAll()
    .then(users => res.json(users))
    .catch(error => {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}


function updateUser(req, res) {
  const { id } = req.params;
  const { username, email, password } = req.body;

  bcrypt.hash(password, 10)
    .then(hashedPassword => {
      return user.update({ username, email, password: hashedPassword }, { where: { id } });
    })
    .then(([updated]) => {
      if (updated === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User updated successfully' });
    })
    .catch(error => {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}


function deleteUser(req, res) {
  const { id } = req.params;

  user.destroy({ where: { id } })
    .then(deleted => {
      if (!deleted) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    })
    .catch(error => {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}




module.exports = { createUser, getAllUsers, updateUser, deleteUser,login };

