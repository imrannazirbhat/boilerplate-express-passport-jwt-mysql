const passport    = require('passport');
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;
var db = require('../db/config');

passport.use(new LocalStrategy({

        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, cb) {


        var sql = "SELECT id, email FROM User WHERE email='" + email + "' AND password='" + password + "'";

        db.connect(function(err) {

            db.query(sql, function (err, result) {

                if (err) return cb(err);

                if (!result || result.length != 1) {
                    return cb(null, false, {message: 'Incorrect email or password.'});
                }

                //converting result into simple object for passing to cb 
                var user = {};
                user.email = result[0]['email'];
                user.id = result[0]['id'];

                return cb(null, user, {
                    message: 'Logged In Successfully'
                });

            });

        });
        

    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'your_jwt_secret'
    },
    function (jwtPayload, cb) {

        //find the user in db if needed with jwtPayload.id
        // DB query goes here..

        return cb(null, {});
    }
));