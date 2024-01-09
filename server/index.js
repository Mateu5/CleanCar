const express = require('express');
const { conexao, User } = require('./src/banco-de-dados/connection');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');
//const config = require('./app.js');


//const { criar, login } = require('./src/controller/usuario')
const { register } = require('./src/controller/RegisterController');
const { login } = require('./src/controller/LoginController');

const app = express();
app.use( express.json() );

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  //Permitir acesso de qualquer origem
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

passport.use(new GoogleStrategy({
    clientID: '611161855689-i1r4p99o0tubcee3bp7a7ccmhv8jqtkg.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback',
    scope: [ 'profile' ]
  }, function verify(issuer, profile, cb) {
    db.get('SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?', [
      issuer,
      profile.id
    ], function(err, row) {
      if (err) { return cb(err); }
      if (!row) {
        db.run('INSERT INTO users (name) VALUES (?)', [
          profile.displayName
        ], function(err) {
          if (err) { return cb(err); }
  
          var id = this.lastID;
          db.run('INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)', [
            id,
            issuer,
            profile.id
          ], function(err) {
            if (err) { return cb(err); }
            var user = {
              id: id,
              name: profile.displayName
            };
            return cb(null, user);
          });
        });
      } else {
        db.get('SELECT * FROM users WHERE id = ?', [ row.user_id ], function(err, row) {
          if (err) { return cb(err); }
          if (!row) { return cb(null, false); }
          return cb(null, row);
        });
      }
    });
  }));
  
app.post("/register", register);
app.post("/login", login);
app.get("/login/federated/google", passport.authenticate('google'));


const serverPort = 3000

app.listen(serverPort, function(){
    console.log("Servidor escutando na porta " + serverPort );
});