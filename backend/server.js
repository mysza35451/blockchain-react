//required libraries
const SHA256 = require("crypto-js/sha256");
var testAPIRouter = require("./routes/testAPI");
//set up express
var express = require("express");
var app = express();

//cors allows the connection between server and react
var cors = require('cors');
app.use(cors());

var port = (process.env.PORT || 9000);

app.get("/testAPI", (req, res)=> res.send("Hello"));
app.listen(port, () => console.log("Server running at: :9000"));
app.use(express.json());

//required headers and metadata for heroku host with mongodb
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

//set up https
const https = require("https");

//connect to mongodb to populate it with users.
const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://mm3299:Password123@cluster0.lkvin.mongodb.net/volttoken?retryWrites=true&w=majority";
const client = new MongoClient(url);
const ObjectID = require("mongodb").ObjectID;
let db;
MongoClient.connect(url, (err, client) => {
  db = client.db("volttoken");
});
app.param("collectionName", (req, res, next, collectionName) => {
  req.collection = db.collection(collectionName);
  return next();
});

//set up JSON parser
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

//set up password encryption
var bcrypt = require("bcrypt");
let saltRounds = 12;

//global variables:
let voltValue = 5.1; //multiply kWh by this number to obtain the volt token

class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }
}

class Block {
  constructor(index, timestamp, transactions, previousHash = "") {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = "";
  }

  hashCalculate() {
    return SHA256(
      this.previousHash + this.timestamp + JSON.stringify(this.transactions)
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
  }

  populatePendingTransactions() {}

  //creation of the genesis block (the first block within the blockchain system)
  createGenesisBlock() {
    return new Block("26 / 07 / 2020", 0); //previous hash declared as 0 because no previous blocks available!
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1]; //returning the latest available block from the chain above
  }

  addPendingTransactions() {
    let block = new Block(Date.now(), this.pendingTransactions);
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash; //assigning hash of a latest block to the new block that is about to be created
    newBlock.hash = newBlock.hashCalculate();
    this.chain.push(newBlock);
  }

  isChainValid() {
    //validates the hashes of the chain
    for (let i = 0; i < this.chain.length; i++) {
      const currentChainBlock = this.chain[i];
      const previousChainBlock = this.chain[i - 1];

      if (currentChainBlock.hash !== currentChainBlock.hashCalculate()) {
        return false;
      }
      if (currentChainBlock.previousHash !== previousChainBlock.hash) {
        return false;
      }
      return true;
    }
  }
}

let voltToken = new Blockchain();

voltToken.addBlock(
  new Block("26 / 07 / 2020", { carRegistration: "1WL22a", cost: 1220 })
);

voltToken.addBlock(
  new Block("26 / 07 / 2020", { carRegistration: "1XL25a", cost: 120 })
);

console.log(JSON.stringify(voltToken, null, 4));

//API requests

//post request to add an user to the DB
app.post("/account/:collectionName", (request, response, next) => {
  let registerArray;

  let password = request.body.password;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    registerArray = {email: request.body.email, username: request.body.username}
  });
  request.collection
    .find({ username: request.body.username })
    .toArray((e, results) => {
      if (!results.length == 0) {
        console.log("Already exists");
        response.send(false);
      } else {
        console.log("added to db");

        request.collection.insertOne(request.body, (e, results) => {
          console.log(request.body);
          if (e) return next(e);
          response.send(true);
        });
      }
      console.log(results);
    });
});

app.post("/account-login/:collectionName", (request, response) => {
  let userData = request.body;
  console.log(userData);
  request.collection.find(userData).toArray((e, results) => {
    if (e) return next(e);
    response.setHeader("Access-Control-Allow-Origin", "*");
    if(!results.length == 0){
      response.send(true);
    }
    else{
      response.send(false);
    }
  });
});


//listen on following port


//transactions added every 10 minutes
//no consensus mechanism - pi will be used to verify the energy input and live time energy converter will exchange it to tokens
//
