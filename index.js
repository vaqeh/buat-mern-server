const productRoutes = require("./src/routes/products");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });
app.use(bodyParser.json()); //type json

app.use("/", productRoutes);
// app.use('/auth',)
// app.use("/blog", productRoutes);


  



  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://vaqeh:34025faqih@cluster0.bmhasie.mongodb.net/?retryWrites=true&w=majority";
  
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  })
  
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect()
      .then(()=>{
        app.listen(3002);
        console.log( "server belajannnnn di port 3002");
      })
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("You successfully connected to MongoDB! BERHASILLLL CONG");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
  