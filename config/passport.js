const mongoose = require('mongoose');

const User = require('../models/user');

const LocalStrategy = require('passport-local').Strategy;



const bcrypt = require('bcryptjs');


//referred passport-local
//LocalStrategy
module.exports = function(passport)
{

  console.log('passport');
 // Local Strategy
 passport.use(new LocalStrategy(function(username, password, done){
  console.log('uname'+username);
   // Match Username
   let query = {username:username};

   //find the username in mlab registers collections
   User.findOne(query, function(err, user){
     if(err) throw err;
     if(!user){

       return done(null, false, {message: 'No user found'});
     }
     // Match Password
     bcrypt.compare(password, user.password, function(err, isMatch){
       if(err) throw err;
       if(isMatch){
         console.log('isMatch'+isMatch);

         return done(null, user);
       } else {
           console.log('Wrong password');
         return done(null, false, {message: 'Wrong password'});
       }
     });
   });
 }));

 passport.serializeUser(function(user, done) {
   done(null, user.id);
 });

 passport.deserializeUser(function(id, done) {
   User.findById(id, function(err, user) {
     done(err, user);
   });
 });


}
