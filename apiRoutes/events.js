module.exports = function (app)
{


  app.get('/api/events',function (request,response)
  {
     console.log('events method')
      var events = [{
        "_id":"1",
        "name":"Auto Expo",
        "description":"desc 1",
        "date":"2016/05/12"
      },

      {
        "_id":"2",
        "name":"Auto Expo 2",
        "description":"desc 2",
        "date":"2017/05/12"
      }
       ]
    response.json(events)
  })





  app.get('/api/special',function (request,response)
  {

       console.log('api speci');
      var events = [{
        "_id":"1",
        "name":"Auto Expo",
        "description":"desc 1",
        "date":"2016/05/12"
      },

      {
        "_id":"2",
        "name":"Auto Expo 2",
        "description":"desc 2",
        "date":"2017/05/12"
      }
       ]
    response.json(events)
  })






}
