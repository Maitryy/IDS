const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required:true},
    keywords: {type: String, required: true},
    row: {type: Number, required: true},
    col: {type: Number, required: true}
})


const Post = mongoose.model("Post", postSchema);
module.exports = Post;
