const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Role = require('../models/Role');
const Permission = require('../models/Permission');                                         

const register = async (req, res) => {
  const { name, email, password, role, permissions } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashedPassword });
  
  const userRole = await Role.findOne({ where: { name: role } });
  await newUser.setRole(userRole);

  const newPermission = await Permission.create(permissions);
  await newUser.setPermission(newPermission);

  res.redirect('/login');
};
const login = async (req, res) => {
    const { email, password } = req.body;
                                                                  
    // Find user by email
    const user = await User.findOne({ where: { email } });                                          

    // If user is not found or password does not match
    if (!user || !(await bcrypt.compare(password, user.password))) {                                    
      // Pass errorMessage to the template
      return res.render('login', { errorMessage: 'Invalid email or password' });
    }
  
    // If credentials are valid, generate token
    const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');
    res.cookie('token', token, { httpOnly: true });
  
    // Redirect to dashboard
    res.redirect('/dashboard');
  };
  

module.exports = { register, login };
