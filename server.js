const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const router     = require('./routers/routes')
const port = process.env.port || 3000;
const app = express();


mongoose.connect('mongodb+srv://mkrv59:mkrv59%4021@cluster0.ncor1ch.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    });
    
    

const db = mongoose.connection;

db.on("error", () => {console.log("Error");});
db.once('open', () => {console.log("Connected");});
    

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use('/', router);

app.listen(port);