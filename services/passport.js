const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

/* user model instance */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
	    clientSecret: keys.googleClientSecret,
	    callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
    	User.findOne({ googleID: profile.id }).then((existingUser) => {
    		if ( existingUser ) {
    			/* we already have a record with the given profile ID */
    			done(null, existingUser);
    		} else {
    			/* if no user ID on record, create one */
    			new User({ googleID: profile.id })
    			.save()
    			.then(user => done(null, user));
    		}
    	});
	  }
	)
);