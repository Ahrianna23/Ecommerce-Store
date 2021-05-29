const express = require('express'); //loads node.js framework

// Intialize express
const app = express();
const port = parseInt(process.env.PORT, 10) || 3000

//Serve public files
app.use(express.static('public'));

app.use('/css', express.static(__dirname + "public/css"));
app.use('/images', express.static(__dirname + "public/images"));

app.set('views', './views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render("index.ejs");
  res.sendFile(__dirname + "/public/css/styles.css");
})

// So the application can show up on localhost:3000
app.listen(port, () => {
    console.log(`> Server is running on http://localhost:${port}`)
})
