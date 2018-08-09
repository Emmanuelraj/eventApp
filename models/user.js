const mongoose = require('mongoose');



var mongooseSchema  = new mongoose.Schema
({

     email :
     {
       type: String,
       required : true
     },

     password :
     {
       type : String,
       required : true
     }




});




module.exports =  mongoose.model('user', mongooseSchema);
