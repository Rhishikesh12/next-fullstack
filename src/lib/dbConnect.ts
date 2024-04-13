import mongoose from "mongoose";

type ConnectionObj = {
	isConnected?: number;
};

const connection: ConnectionObj = {};

async function dbConnect(): Promise<void> {
	if (connection.isConnected) {
		console.log("Already Connected to Database!");
		return;
	}

	try {
		// ? we can use "!" operator instead of using empty string
		const db = await mongoose.connect(process.env.MONGO_URL || "");
		connection.isConnected = db.connections[0].readyState;
		console.log("DB connected successfully!");
	} catch (error) {
		console.log(`Connection Failed! ${error}`);
		process.exit(1);
	}
}

export default dbConnect;
