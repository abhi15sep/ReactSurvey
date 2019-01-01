/* keys.js - sort out what set of credentials to return */

if (process.env.NODE_ENV === 'production') {
	/* as it says on tin. return prod keys. */
	module.exports = require('./prod');
} else {
	/* we're in dev-landia */
	module.exports = require('./dev');
}