
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

/* testing authentication flow */
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
	    clientSecret: keys.googleClientSecret,
	    callbackURL: '/auth/google/callback'
    },
    accessToken => {
	    console.log(accessToken);
	  }
	)
);

/* single route handler, testing an ask from google to retrieve specific pieces of google account */
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

const PORT = process.env.PORT || 5000;
app.listen(PORT);
