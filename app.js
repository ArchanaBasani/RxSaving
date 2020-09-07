var createError = require('http-errors');
var express = require('express');
var path = require('path');

//importing mongoose; used to connect to mongo DB
var mongoose = require('mongoose');

//connecting to mongo DB - syntax url -mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
mongoose.connect('syntaxurl',
  {useNewUrlParser: true },function(err){
    if(err) {
      console.log('Some problem with the connection ' +err);
    } else {
      console.log('The Mongoose connection is ready');
    }
  });


var pharmacyRouter = require('./routes/pharmacy');


var app = express();

//made server listen to 3000 port
const port = 3000;
app.listen(port, function(){
    console.log('Connection Established ! Listening at port : '+port);
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));

//creating location router
app.use('/location',pharmacyRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

module.exports = app;
