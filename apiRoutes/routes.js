module.exports = function (app)
{


   const User = require('../models/user');



    const jwt = require('jsonwebtoken');




   app.get('/',function(request,response)
   {
        console.log('get method');
        response.send('Hello from server');
   });




  app.get('/api',function(request,response)
  {
       console.log('get method');
       response.send('API Route');
  });



  app.post('/api/register',function (request,response)
  {

    new User({
             email : request.body.email,
             password : request.body.password

         }).save((err, registeredUser)  =>
         {
              if(err)
                {
                  console.log('error'+err);
                }
                else
                {

                let payload  = {subject :registeredUser._id}
                let token  = jwt.sign(payload, 'secretKey')

                  response.status(200);
                //  response.send(registeredUser);
                response.send({token});
                }
         })

  });





  app.post('/api/login',function (request,response)
  {

    console.log('login post method');

    User.findOne({email: request.body.email},function (err,user)
    {
       if(err)
        {
          console.log('error on db'+err);
        }

        else {
          if(!user)
           {
             response.status(401).send('Invalid email');
           }
           else if (user.password!==request.body.password)
           {
             response.status(401).send('Invalid password');
           }
           else {

              let payload = { subject : user._id}
              let token = jwt.sign(payload,'secretKey')
            // response.status(200).send(user);
             response.status(200).send({token})
           }
        }

    })

  });













}
