import mongoose from "mongoose";

var dbConnected = false;

function connectDb(cb) {
	mongoose.connect(
		//! ver borrador=2 
		{ useNewUrlParser: true, useUnifiedTopology: true },
		(err) => {
			if (!err) {
				dbConnected = true;
			}
			if (cb != null) {
				cb(err);
			}
		}
	);
}

const User = mongoose.model("Users", {
	username: String,
	password: String,
});

export { connectDb, User };