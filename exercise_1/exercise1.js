const PORT = 3000;
const express = require("express");
const app = express();

// Fixed the route
// app.get("/", (req,res)=>{
//     res.send(console.log("Why hello there!"))
// })

// Fixed Route
// app.post("/exe", (req,res) => {
//     res.send("🥭 is 🔥")
// })

// Fixed Route
// app.post("/", (req,res) => {
//     res.send("I wonder what's wrong with this route 🤔?")
// })

// Fixed Route
// app.get("/", (req,res) => {
//     res.send("Happy 🐶 loves yummy dog food!")
// })

// fixed route
 app.get("/fruitsmoothie",(req,res) => {

    res.send("A 🥭, 🍍, 🍓 make a wonderful smoothie!")
})


app.listen(PORT, console.log(`listening on port ${PORT}`));