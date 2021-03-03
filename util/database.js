const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) =>{
 
//MongoClient.connect('mongodb+srv://new-user:Compiler_14@cluster0.mjmwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

MongoClient.connect('mongodb+srv://new-user:Compiler_14@cluster0.mjmwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then( client =>{
  console.log('Connected!');
  callback(client);
})
.catch(err =>{
  console.log(err);
});

};

module.exports = mongoConnect;
