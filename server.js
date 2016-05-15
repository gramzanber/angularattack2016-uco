//dependencies
    var express  = require('express');
    var app      = express();                              
    var mongoose = require('mongoose');                  
    var morgan = require('morgan');             
    var bodyParser = require('body-parser');    
    var methodOverride = require('method-override'); 

//configuration
    mongoose.connect('mongodb://admin:admin@ds023432.mlab.com:23432/angularuco');    

    app.use(express.static(__dirname + '/public'));                 
    app.use(morgan('dev'));                                       
    app.use(bodyParser.urlencoded({'extended':'true'}));           
    app.use(bodyParser.json());                                  
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
    app.use(methodOverride());

//model
var Song = mongoose.model('Song', {
   url : String 
});
    
//routes
app.get('/api/songs', function(req,res){   
    Song.find(function(err,songs){
        if(err)
            res.send(err)
        res.json(songs);    
    });
});

app.post('/api/songs', function(req, res){
   Song.create({
      url: req.body.text,
      done: false 
   }, function(err, song){
       if(err)
            res.send(err);
        
       Song.find(function(err,songs){
           if(err)
                res.send(err);
           res.json(songs);
       });
   }); 
});

app.delete('/api/songs/:song_id', function(req,res){
   Song.remove({
      _id : req.params.song_id
   }, function(err, song) {
       if(err)
            res.send(err);
       Song.find(function(err,songs){
          if(err)
            res.send(err); 
          res.json(songs);
       });
   }); 
});

//Angular application
app.get('*', function(req, res) {
    res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

//listener
    app.listen(3000);
    console.log("App listening on port 3000");