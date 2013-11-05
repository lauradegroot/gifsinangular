'use strict';

module.exports = function(app, isLoggedIn) {
  app.get('/login', isLoggedIn, function (req, res) {
    // Persona email is already saved in the session but showing this so that you
    // can set other session items and return in this payload.
    res.json({
      email: req.session.email
    });
  });

  app.get('/*', function (req, res) {
    res.render('index');
  });

  app.get('/api/get_gifs', function (req, res){
    res.json({
      gifs:[
        'http://i.imgur.com/t75pa9M.gif',
        'http://i.imgur.com/IOy6iZk.gif',
        'http://i.imgur.com/vI1S9Kg.gif',
        'http://i.imgur.com/rzmNgIP.gif',
        'http://i.imgur.com/37ua0CJ.gif'
      ]
    });
  });
};
