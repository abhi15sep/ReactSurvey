module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ error: "I am error. You must log in" });
	}

	next();
};