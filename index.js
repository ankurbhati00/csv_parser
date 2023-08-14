const express = require('express');
const app = express();
const PORT = 8000;


app.use(express.urlencoded());
app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./router'));






app.listen(PORT, (err) => {
    if (err) {
        console.log('ERROR in server listining.',err);
    }
    console.log(`Server is up on port: ${PORT}>>>>>>>`);
})