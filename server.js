const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/db');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', authRoutes);

sequelize.sync().then(() => {
  app.listen(3001, () => console.log('Server is running on port 3001'));
});
    


app.get('/dashboard', (req, res)=> {
    res.send('<h2>Dashboard</h2> ');      

})



                                                                                