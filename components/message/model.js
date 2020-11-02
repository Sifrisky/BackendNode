const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({

	chat: {
		type: Schema.ObjectId,
		ref: 'Chat',
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User',
	},	
	message: {
		type: String,
		required: true,
	},
	date: Date,
	file: String,
});
const model = mongoose.model('Message', mySchema); //lo usaremos cuando queramos hacer
//modificaciones en la base de datos,excusivamente relacionadas a mensajes.

module.exports = model;