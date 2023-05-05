const express = require('express');
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const connectDB = require('./src/DB/connect');
const rootRoute = require('./src/routes/index.route')

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Root Route
app.use('/api/v1', rootRoute)


const port = process.env.PORT || 5000
const start = (async () => {
	await connectDB(process.env.MONGO_URI);

	app.listen(port, () => {
		console.log(`Server is listening at ${port}...`);
	});
});

start();