const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
const otpGenerator = require('otp-generator')
// var otpGenerator = require('otp-generator')

// otpGenerator.generate(6, { upperCase: false, specialChars: false });



app.use(cors());
app.options('*', cors())

//middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);

const genOtp = () => otpGenerator.generate(4);




console.log("OTP GENEERATE=>>>", genOtp());
//Database
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'
})
    .then(() => {
        console.log('Database Connection is ready...')
    })
    .catch((err) => {
        console.log("errorrr not ready=\>>>>", err);
    })

//Routes
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');
const otpRoutes = require('./routes/otp');

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/otp`, otpRoutes);
app.use(`${api}/orders`, ordersRoutes);

const PORT = process.env.PORT

// app.get('/', (req, res) => {
//     res.send("Helle here in app")
// })

//Server
app.listen(PORT || 3000, () => {

    console.log('server is running on PORt', PORT);
})