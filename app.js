// Initialize express
const express = require('express')
const app = express()

// require handlebars
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

// Use "main" as our default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
// Use handlebars to render
app.set('view engine', 'handlebars');

// OUR MOCK ARRAY OF PROJECTS
var characters = [
  { name: "Grøh", weapontype: "Twinblade", weapon: "Arondight Replica", fightstyle: "Aval Dual-Swordsmanship", difficulty: "Beginner", birthplace: "Kingdom of Denmark-Norway", birthday: "November 18", sex: "Male", height: "5'11 (181 cm)", weight: "180lbs (82kg)", bloodtype: "A"},
  { name: "Sophitia Alexandra", weapontype: "Sword and Shield", weapon: "Omega Sword and Elk Shield", fightstyle: "Athenian Style", difficulty: "Beginner", birthplace: "Athens, Ottoman Empire", birthday: "March 12", sex: "Female", height: "5'6 (168cm)", weight: "Will not Reveal", bloodtype: "B" }
]


// Tell our app to send the "hello world" message to our home page
// Render the "home" layout for the main page and send the following msg
app.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are Cool!' });
})

// INDEX
app.get('/cast', (req, res) => {
  res.render('characters-index', { characters: characters });
})

// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})