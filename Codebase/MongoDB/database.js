const express = require("express");
const app = express();
const mongoose = require("mongoose");


//database

const database = module.exports=()=>{
    const connectionParams={
        useNewUrlParse:true,
        useUnifieldTopology:true,
    }

    try{
        mongoose.connect( 'mongodb+srv://nipunAJAX:N5WIZUfqYD7akKFj@cluster0.n0f2uqw.mongodb.net/MYDEVDB?retryWrites=true&w=majority');
        console.log('DB CON DONE!');
       

    }
    catch(error){
        console.log('DB CON FAILED!');
        console.log(error);

    }
}


database();

app.listen(5001,()=>{
    console.log("Server run on port 5001");
});


//dbName MYDEVDB
//username nipunAJAX
//password N5WIZUfqYD7akKFj