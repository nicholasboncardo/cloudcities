import { handler } from './build/handler.js';
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url);
import express from 'express';
const app = express();
const fs = require("fs")
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 3000;
const multer = require('multer');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const { STS_user, STS_pw } = require('./secrets.json');

app.use((req, res, next) => {
	res.setHeader('x-frame-options', 'deny');
	next();
});
//app.use(express.json());

const diskStorage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, __dirname + '/uploads');
	},
	filename: function (req, file, callback) {
		callback(null, `${file.fieldname}.png`);
	}
});

const uploader = multer({
	storage: diskStorage
});


app.post('/addPostfromServer', uploader.single('file'), (req, res) => {
	console.log('req.file: ', req.body);
	let { path } = req.file;
	let token;
	fetch('https://cloudcities.studiotomassaraceno.org/wp-json/jwt-auth/v1/token', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			accept: 'application/json'
		},
		body: JSON.stringify({
			username: STS_user,
			password: STS_pw
		})
	})
		.then((result) => {
			return result.json();
		})
		.then((result) => {
			console.log('result: ', result.token);
			return result.token;
		})
		.then((result) => {
			token = result;
			fetch('https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media', {
				method: 'POST',
				headers: {
					'content-type': 'image/png',
					'Content-Disposition': 'attachment; filename=file.png',
					Authorization: `Bearer ${result}`
				},
				body: fs.readFileSync(path)
			})
				.then((result) => {
					console.log('result: ', result);
					return result.json();
				})
				.then((result) => {
					console.log('result from wp: ', result);
					console.log('token after result from wp: ', token);
					let imageID = result.id;
					fetch(`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media/${imageID}`, {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
							accept: 'application/json',
							Authorization: `Bearer ${token}`
						},
						body: JSON.stringify({
							title: req.body.title,
							description: req.body.description,
							caption: req.body.name
						})
					}).then((result) => {
						console.log('last result: ', result);
					});
				}).catch((error)=> {
					console.log("error: ", error)
				});
		});
});
app.use(handler);
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
