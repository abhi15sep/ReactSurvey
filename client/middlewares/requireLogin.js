module.exports = (req, res, next) => {
	if (!user) {
		return res.status(401).send({error: "I am error. You're not logged in"});
	}

	next();
}