const PORT = 3001
const express = require("express")
const app = express()

const cities = [
    { cityName: "Houston", continent: "North America" },
    { cityName: "Placerville", continent: "North America" },
    { cityName: "Lake Tahoe", continent: "North America" },
    { cityName: "Enterprise", continent: "North America" },
    { cityName: "Dothan", continent: "North America" },
    { cityName: "Destin", continent: "North America" },
    { cityName: "Phoenix", continent: "North America" },
    { cityName: "San Antonio", continent: "North America" },
    { cityName: "Nuremberg", continent: "Europe" },
    { cityName: "Cologne", continent: "Europe" },
    { cityName: "Vilseck", continent: "Europe" },
  ];
 
  const es6Renderer = require('express-es6-template-engine');
  app.engine('html', es6Renderer);
  app.set('views', 'templates');
  app.set('view engine', 'html')

// Write your routes between the ***
app.get("/", (req,res) => {
    res.send("Node and express are just lovely")
})
// ***
app.get("/city", (req,res) => {
    res.render('city', {
        locals: {
            cities,
        }
    })

})
// ***

const myName = {
    name: "JOse",
    city: "Houston",
    state: "Texas",
}
app.post ("/", (req,res) => {
    res.send(myName)
})
// ***

app.put("/", (req,res) => {
    res.statusCode = 400;
    res.send ("This is an invalid route")
})

// ***

const movies = [
    {movieTitle: "The Nightmare Before Christmas", poster:`<img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/The_Nightmare_Before_Christmas_%282944550316%29.jpg" alt="">` },
    {movieTitle: "Tombstone", poster:`<img src="https://themalestrom.com/wp-content/uploads/2017/09/tombstone.jpg" alt="">` },
    {movieTitle: "Band of Brothers", poster:`<img src="https://i5.walmartimages.com/asr/43508000-f053-415d-9bc1-3f87c6200486.3195fbc5abe7cb3851d6d6231c90481b.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="">` },
    {movieTitle: "Halloween", poster:`<img src="https://m.media-amazon.com/images/I/61nCn2+-G0L._AC_SY679_.jpg" alt="">` },
    {movieTitle: "The Mandalorian", poster:`<img src="https://live.staticflickr.com/65535/49106240381_ac6c05ca51_b.jpg" alt="">` },

];
app.use(express.static('public'));
app.get("/movie", (req,res) => {
    res.render("movie", {
        locals: {
            movies,
        }
    })
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))