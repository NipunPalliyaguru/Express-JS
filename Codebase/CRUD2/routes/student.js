var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");

const studentModel= require("../models/student.model");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('students Route works');
});

router.post('/add', function(req, res, next) {

    let newStudent= new studentModel({

        studentID:100,
        fname:'Nipun',
        lname:'MAX',
        dob:'1988-02-20',
        dep:'IT'
    })

    newStudent.save(function(err,newStudent){

        if (err){
            res.send(err)
        }
        else
            res.send({status: 200,message:'User Added Successfully',studentObj:newStudent});

        
    });

    res.send('students Route works');
  });
  


module.exports = router;
