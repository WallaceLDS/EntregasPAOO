
const mongoose = require ('mongoose');

const livroSchema = mongoose.Schema ({
 id: {type: Number, required: false},
 titulo: {type: String, required: true}, 
 autor: {type: String, required: true},
 nmpag: {type: Number, required: true}
});
module.exports = mongoose.model('Livro', livroSchema);