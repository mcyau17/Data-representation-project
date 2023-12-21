const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');


app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://mcyau17:<yausaiwah9952>@cluster0.coaymg2.mongodb.net/?retryWrites=true&w=majority');

//   use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const CharacterSheetSchema = new mongoose.Schema({
  Name:String,
  CharImage:String,
  Race:String,
  Class:String,
  SubClass:String,
  Statline:String
})

const CharacterSheetModel = mongoose.model('Charsheet', CharacterSheetSchema);

app.delete('/api/charsheet/:id',async (req, res)=>{
  console.log("Delete: "+req.params.id);

  let Charsheet = await CharacterSheetModel.findByIdAndDelete(req.params.id);
  res.send(Charsheet);
})


app.put('/api/charsheet/:id', async(req, res)=>{
  console.log("Update: "+req.params.id);

  let Charsheet = await CharacterSheetModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(Charsheet);
})


app.post('/api/charsheet', (req,res)=>{
    console.log(req.body);

    CharacterSheetModel.create({
      Name:req.body.Name,
      CharImage:req.body.CharImage,
      Race:req.body.Race,
      Class:req.body.Class,
      SubClass:req.body.SubClass,
      Statline:req.body.Statline
    })
    .then(()=>{ res.send("Sheet Created")})
    .catch(()=>{ res.send("Sheet NOT Created")});

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/charsheet', async(req, res)=>{
    
  let Charsheet = await CharacterSheetModel.find({});
  res.json(Charsheet);
})

app.get('/api/charsheet/:identifier',async (req,res)=>{
  console.log(req.params.identifier);

  let Charsheet = await CharacterSheetModel.findById(req.params.identifier);
  res.send(Charsheet);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})