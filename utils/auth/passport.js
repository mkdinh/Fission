
// SETTING UP AUTHENTICATION MIDWARE
//--------------------------------------------------------
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

// configure passport to use Auth0
const strategy = new Auth0Strategy({
    domain: process.env.["AUTH0_DOMAIN"],
    clientID: process.env.["AUTH0_CLIENT_ID"],
    clientSecret: process.env["AUTH0_CLIENT_SECRET"],
    callbackURL: process.env["CALLBACKURL"]
}, (accessToken, refeshToken, profile, done) => {
    console.log("profile is", profile);

    return done(null, profile);
});

passport.use(strategy);

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

module.exports = strategy;