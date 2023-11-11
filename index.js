const express = require("express")
const app = express()
const port = 5000

app.get("/" , (req,res) => {
    res.send("Hello Everyone")
})

app.get("/route1", (boo,bee)=>{
    bee.send(`<html>
        <body>
            <h1>The World</h1>
            <p>I am a citizen of the world</p>
    </body></html>`)
})

app.get("/route2", (gaa,goo)=> {
    goo.json({
        name:"jeevan",
        age:"21",
        gender:"male"
    }
    )
    
})

app.listen(port, ()=> console.log("really nigga"))