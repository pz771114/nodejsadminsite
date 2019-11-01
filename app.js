const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

//middleware
//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//static css js files
app.use(express.static('public'));

//Routes
app.use('/',require('./routers/index'));
app.use('/users',require('./routers/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Started at port ${PORT}`);
})